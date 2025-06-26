import { AppDataSource } from "../data-source";
import { Category } from "./category.entity";
export class CategoryService {
    constructor() {
        this.categoryRepo = AppDataSource.getRepository(Category);
    }
    async createCategory(name) {
        const category = this.categoryRepo.create({ name });
        return this.categoryRepo.save(category);
    }
    async getAllCategories() {
        return this.categoryRepo.find();
    }
}
