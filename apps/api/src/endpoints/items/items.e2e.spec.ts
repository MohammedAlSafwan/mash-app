import { Item } from "@mashedapp/models"
import * as supertest from "supertest"
import { Repository } from "typeorm"

import { TestingHelper } from "../../utils/test"
import { ItemsModule } from "./items.module"

describe("Items", () => {
  let testingHelper: TestingHelper
  let repository: Repository<Item>

  beforeAll(async () => {
    testingHelper = await new TestingHelper().initializeModuleAndApp("items", [ItemsModule])

    repository = testingHelper.module.get("ItemRepository")
  })

  beforeEach(() => testingHelper.reloadFixtures())
  afterAll(() => testingHelper.shutdownServer())

  describe("GET /items", () => {
    it("should return an array of items", async () => {
      const { body } = await supertest
        .agent(testingHelper.app.getHttpServer())
        .get("/items")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)

      expect(body).toMatchObject([
        { id: expect.any(String), text: "test-name-0" },
        { id: expect.any(String), text: "test-name-1" },
      ])
    })

    it("should create one item", async () => {
      const item = { text: "test-name-0" }

      const { body } = await supertest
        .agent(testingHelper.app.getHttpServer())
        .post("/items")
        .send(item)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201)

      expect(body).toMatchObject({ id: expect.any(String), text: "test-name-0" })
    })

    it("should update the name of a item", async () => {
      const { body } = await supertest
        .agent(testingHelper.app.getHttpServer())
        .patch(`/items/ff540c7f-2430-4153-94ea-5384ab5e0532`)
        .send({ text: "updated-name" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)

      expect(body).toMatchObject({ id: "ff540c7f-2430-4153-94ea-5384ab5e0532", text: "updated-name" })
    })

    it("should delete one item", async () => {
      await supertest
        .agent(testingHelper.app.getHttpServer())
        .delete(`/items/ff540c7f-2430-4153-94ea-5384ab5e0532`)
        .set("Accept", "application/json")
        .expect(200)
      const missingItem = await repository.findOne({ id: "ff540c7f-2430-4153-94ea-5384ab5e0532" })

      expect(missingItem).toBe(undefined)
    })
  })
})
