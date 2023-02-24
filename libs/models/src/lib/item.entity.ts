import { IsBoolean, IsNotEmpty, Max, Min, MinLength } from "class-validator"
import { Column, Entity } from "typeorm"
import { Transform } from 'class-transformer';

import { RootEntity } from "./root.entity"

@Entity()
export class Item extends RootEntity {
  @IsNotEmpty()
  @Column()
  name: string

  @Min(0)
  @Column()
  price: number

  @MinLength(0)
  @Column()
  image: string

  @Min(0)
  @Max(5)
  @Column()
  rating: number

  @IsBoolean()
  @Column({ nullable: true })
  isInCart: boolean
}
