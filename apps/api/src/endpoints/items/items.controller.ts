import { Item } from "@mashedapp/models"
import { Controller } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { Crud, CrudController } from "@nestjsx/crud"

import { ItemsService } from "../../services/items/items.service"

@ApiTags("items")
@Controller("items")
@Crud({
  model: { type: Item },
  params: {
    id: {
      field: "id",
      type: "string",
      primary: true,
      disabled: false, //If not disabled, API generator will not find it
    },
  },
  routes: {
    exclude: ["createManyBase", "getOneBase", "replaceOneBase"],
    getManyBase: { decorators: [ApiOperation({ operationId: "getManyItems", summary: "Retrieve multiple Items" })] },
    createOneBase: { decorators: [ApiOperation({ operationId: "createOneItem", summary: "Create one Item" })] },
    updateOneBase: { decorators: [ApiOperation({ operationId: "updateOneItem", summary: "Update a single Item" })] },
    deleteOneBase: { decorators: [ApiOperation({ operationId: "deleteOneItem", summary: "Delete a single Item" })] },
  },
})
export class ItemsController implements CrudController<Item> {
  constructor(public service: ItemsService) {}
}
