import { Item } from "@mashedapp/models"
import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { ItemsService } from "./items.service"

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemsService],
  exports: [ItemsService],
  controllers: [],
})
export class ItemsServiceModule {}
