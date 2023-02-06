import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Todo } from "@mashedapp/models"

import { TodosServiceModule } from "../../services/todos/todos-service.module"
import { TodosService } from "../../services/todos/todos.service"
import { TodosController } from "./todos.controller"

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), TodosServiceModule],
  providers: [TodosService],
  exports: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
