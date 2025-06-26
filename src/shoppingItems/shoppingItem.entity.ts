import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "../categories/category.entity";

@Entity("shopping_items")
export class ShoppingItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "nvarchar", length: 255 })
  name!: string;

  @Column({ type: "int" })
  quantity!: number;

  @ManyToOne(() => Category, { nullable: false, onDelete: "CASCADE" })
  @JoinColumn({ name: "category" })
  category!: Category;
}
