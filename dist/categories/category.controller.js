"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("./category.service");
class CategoryController {
    static async getCategories(req, res) {
        try {
            const categories = await category_service_1.CategoryService.getAllCategories();
            res.json(categories);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to get categories", error });
        }
    }
    static async createCategory(req, res) {
        try {
            const { name } = req.body;
            const category = await category_service_1.CategoryService.createCategory(name);
            res.status(201).json(category);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to create category", error });
        }
    }
}
exports.CategoryController = CategoryController;
