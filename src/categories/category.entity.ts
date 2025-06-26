import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "categories" })
export class Category {
@PrimaryGeneratedColumn()
  id!: number; 

@Column({ type: "nvarchar", default: "defaultName" })
  name!: string; 
}