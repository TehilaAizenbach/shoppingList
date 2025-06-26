import { CategoryRepository } from "./category.repository";
export class CategoryService {
    static async getAllCategories() {
        return CategoryRepository.find();
    }
    static async findCategoryById(id) {
        return CategoryRepository.findOneBy({ id });
    }
    static async createCategory(data) {
        const { name } = data;
        const category = CategoryRepository.create({ name });
        return CategoryRepository.save(category);
    }
}
