import { Max, Min, MinLength } from "class-validator"
import { Column, Entity } from "typeorm"

import { RootEntity } from "./root.entity"

@Entity()
export class Item extends RootEntity {
  @Column()
  @MinLength(1)
  name: string

  @Column()
  @Min(0)
  price: number

  @Column()
  @MinLength(0)
  image: string

  @Column()
  @Min(0)
  @Max(5)
  rating: number

  @Column()
  isInCart: boolean
}
