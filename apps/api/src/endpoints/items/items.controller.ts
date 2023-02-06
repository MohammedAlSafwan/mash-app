import { Controller } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { CreateManyDto, Crud, CrudController, CrudRequest, GetManyDefaultResponse} from "@nestjsx/crud"
import { Item } from "@mashedapp/models"
import { ItemsService } from "../../services/items/items.service"

@ApiTags("items")
@Controller('items')
@Crud({
    model: {type: Item},
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