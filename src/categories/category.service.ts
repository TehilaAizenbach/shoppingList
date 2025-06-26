import { CategoryRepository } from "./category.repository";
import { Category } from "./category.entity";
import { CategoryDTO } from "../types/category";

export class CategoryService {
  static async getAllCategories(): Promise<Category[]> {
    return CategoryRepository.find();
  }

  static async findCategoryById(id: number): Promise<Category | null> {
    return CategoryRepository.findOneBy({ id });
  }

  static async createCategory(data: CategoryDTO): Promise<Category> {
    const {name} = data;
    const category = CategoryRepository.create({ name });
    return CategoryRepository.save(category);
  }
}
