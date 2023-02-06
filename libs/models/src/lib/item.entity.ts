import { MinLength } from "class-validator"
import { Column, Entity } from "typeorm"

import { RootEntity } from "./root.entity"

@Entity()
export class Item extends RootEntity {
  @Column()
  @MinLength(1, { always: true })
  discription: string;
}
