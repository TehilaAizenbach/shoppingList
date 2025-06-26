import { AppDataSource } from "../data-source";
import { Category } from "./category.entity";

export const CategoryRepository = AppDataSource.getRepository(Category);
