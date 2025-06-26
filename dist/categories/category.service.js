"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const category_repository_1 = require("./category.repository");
class CategoryService {
    static async getAllCategories() {
        return category_repository_1.CategoryRepository.find();
    }
    static async findCategoryById(id) {
        return category_repository_1.CategoryRepository.findOneBy({ id });
    }
    static async createCategory(data) {
        const { name } = data;
        const category = category_repository_1.CategoryRepository.create({ name });
        return category_repository_1.CategoryRepository.save(category);
    }
}
exports.CategoryService = CategoryService;
