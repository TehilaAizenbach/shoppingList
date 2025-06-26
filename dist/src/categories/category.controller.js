import { CategoryService } from "./category.service";
const service = new CategoryService();
export class CategoryController {
    async create(req, res) {
        const { name } = req.body;
        try {
            const newCategory = await service.createCategory(name);
            res.status(201).json(newCategory);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to create category", error });
        }
    }
    async getAll(req, res) {
        try {
            const categories = await service.getAllCategories();
            res.json(categories);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to fetch categories", error });
        }
    }
}
