import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Item } from "@mashedapp/models"

import { ItemsServiceModule } from "../../services/items/items-service.module"
import { ItemsService } from "../../services/items/items.service"
import { ItemsController } from "./items.controller"

@Module({
  imports: [TypeOrmModule.forFeature([Item]), ItemsServiceModule],
  providers: [ItemsService],
  exports: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
