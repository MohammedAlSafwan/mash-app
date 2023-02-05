import { ConfigFile } from "@rtk-query/codegen-openapi"

const reduxPath = "../../webapp/src/redux"
const config: ConfigFile = {
  schemaFile: "http://localhost:3333/documentation/json",
  apiFile: `${reduxPath}/mashedapp-api.ts`,
  apiImport: "mashedappApi",
  outputFiles: {
    [`${reduxPath}/endpoints/todos-endpoints.ts`]: { exportName: "todosApi", filterEndpoints: /todo/i },
  },
  filterEndpoints: [/todo/i],
  exportName: "mashedappApi",
  hooks: true,
}

export default config
