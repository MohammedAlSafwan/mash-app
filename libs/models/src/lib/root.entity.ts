import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export class RootEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string

  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt?: Date
}
