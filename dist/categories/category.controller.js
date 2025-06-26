import { CategoryService } from "./category.service";
export class CategoryController {
    static async getCategories(req, res) {
        try {
            const categories = await CategoryService.getAllCategories();
            res.json(categories);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to get categories", error });
        }
    }
    static async createCategory(req, res) {
        try {
            const { name } = req.body;
            const category = await CategoryService.createCategory(name);
            res.status(201).json(category);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to create category", error });
        }
    }
}
