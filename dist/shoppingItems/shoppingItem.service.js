"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingItemService = void 0;
const shoppingItem_repository_1 = require("./shoppingItem.repository");
const category_service_1 = require("../categories/category.service");
class ShoppingItemService {
    static async getAllItems() {
        const items = await shoppingItem_repository_1.ShoppingItemRepository.find({ relations: ["category"] });
        return items;
    }
    static async createItem(data) {
        const category = await category_service_1.CategoryService.findCategoryById(data.categoryId);
        if (!category)
            throw new Error("Category not found");
        const item = shoppingItem_repository_1.ShoppingItemRepository.create({
            name: data.name,
            quantity: data.quantity,
            category: category,
        });
        return shoppingItem_repository_1.ShoppingItemRepository.save(item);
    }
    static async updateItem(id, data) {
        const item = await shoppingItem_repository_1.ShoppingItemRepository.findOne({
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
            const category = await category_service_1.CategoryService.findCategoryById(data.categoryId);
            if (!category)
                throw new Error("Category not found");
            item.category = category;
        }
        return await shoppingItem_repository_1.ShoppingItemRepository.save(item);
    }
    static async deleteItem(id) {
        const item = await shoppingItem_repository_1.ShoppingItemRepository.findOneBy({ id });
        if (!item) {
            throw new Error("Item not found");
        }
        return await shoppingItem_repository_1.ShoppingItemRepository.remove(item);
    }
}
exports.ShoppingItemService = ShoppingItemService;
