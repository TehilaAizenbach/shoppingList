import { ShoppingItemRepository } from "./shoppingItem.repository";
import { CategoryService } from "../categories/category.service";
export class ShoppingItemService {
    static async getAllItems() {
        return ShoppingItemRepository.find();
    }
    static async createItem(data) {
        const category = await CategoryService.findCategoryById(data.categoryId);
        if (!category)
            throw new Error("Category not found");
        const item = ShoppingItemRepository.create({
            name: data.name,
            quantity: data.quantity,
            category: category,
        });
        return ShoppingItemRepository.save(item);
    }
    static async updateItem(id, data) {
        const item = await ShoppingItemRepository.findOne({
            where: { id },
            relations: ["category"],
        });
        if (!item)
            return null;
        if (data.name !== undefined)
            item.name = data.name;
        if (data.quantity !== undefined)
            item.quantity = data.quantity;
        if (data.categoryId !== undefined) {
            const category = await CategoryService.findCategoryById(data.categoryId);
            if (!category)
                throw new Error("Category not found");
            item.category = category;
        }
        return await ShoppingItemRepository.save(item);
    }
    static async deleteItem(id) {
        const item = await ShoppingItemRepository.findOneBy({ id });
        if (!item) {
            throw new Error("Item not found");
        }
        return await ShoppingItemRepository.remove(item);
    }
}
