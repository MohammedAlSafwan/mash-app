import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm"
import { Item } from "@mashedapp/models"
import { Repository } from "typeorm"

@Injectable()
export class ItemsService extends TypeOrmCrudService<Item> {
    constructor(@InjectRepository(Item) repository: Repository<Item>) {
      super(repository)
    }
}
