import fs from "fs";
import path from "path";
import { walk } from "../utils";
import { Command } from "clipanion";

export class GenerateEntityIndexFile extends Command {
  static paths = [["generate-entity-index-file"]]

  static usage = Command.Usage({
    category: "generators",
    description: "This script will generate index file for the model library.",
    examples: [["A basic example", "npm run mashedapp-cli generate-entity-index-file"]],
  })

  async execute(): Promise<number | void> {
    const entityIndexLockFilePath = path.join(__dirname, "entity-index-hash.txt")
    const indexFilePath = path.join(__dirname, "../libs/models/src/index.ts")
    const filePathsByFolder = {}

    for await (const entry of walk(path.join(__dirname, "../libs/models/src/lib"), [])) {
      const folder = entry.split("lib/")[1].split("/")[0]

      if (!filePathsByFolder[folder]) {
        filePathsByFolder[folder] = []
      }
      filePathsByFolder[folder].push(entry)
    }

    let indexFileContent = `/**
 * This file was automatically generated by generate-entity-index.js file
 * You can disable the automatic generation by removing the prepare section of the workspace.json file under api section
 */\n\n`

    const sortedFolders = Object.entries(filePathsByFolder)
      .sort()
      .reduce((container, [key, value]) => ({ ...container, [key]: value }), {})
    for (const [folder, filePaths] of Object.entries(sortedFolders)) {
      indexFileContent += `// ${folder}\n`
      indexFileContent += getExportLinesFromFilePaths(filePaths)
      indexFileContent += "\n"
    }

    const entityIndexLockFileExists = fs.existsSync(entityIndexLockFilePath)
    const existingEntityHash = parseInt(
      entityIndexLockFileExists ? await fs.promises.readFile(entityIndexLockFilePath, { encoding: "utf8" }) : ""
    )
    const currentHash = hashCode(indexFileContent)
    if (existingEntityHash !== currentHash) {
      await fs.promises.writeFile(entityIndexLockFilePath, currentHash.toString(), { encoding: "utf8" })
      await fs.promises.writeFile(indexFilePath, indexFileContent, { encoding: "utf8" })

      console.info("Generated index file for shared entity library")
    }
  }
}

function hashCode(str) {
  let hash = 0
  let i
  let chr

  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

function getExportLinesFromFilePaths(filePaths) {
  return filePaths
    .sort()
    .map(filePath => {
      const relevantFilePath = filePath.split("src/")[1].replace(".ts", "")

      return `export * from "./${relevantFilePath}"\n`
    })
    .join("")
}
