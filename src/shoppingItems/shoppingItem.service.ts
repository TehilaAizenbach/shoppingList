import { ShoppingItemRepository } from "./shoppingItem.repository";
import { CategoryService } from "../categories/category.service";
import { ShoppingItem } from "./shoppingItem.entity";
import { ShoppingItemDTO } from "../types/shopping_item";

export class ShoppingItemService {

  static async getAllItems(): Promise<ShoppingItem[]> {
const items = await ShoppingItemRepository.find({ relations: ["category"] });
return items;
  }

  static async createItem(data: ShoppingItemDTO): Promise<ShoppingItem> {
    const category = await CategoryService.findCategoryById(data.categoryId);
    if (!category) throw new Error("Category not found");

    const item = ShoppingItemRepository.create({
      name: data.name,
      quantity: data.quantity,
      category: category,
    });

    return ShoppingItemRepository.save(item);
  }

  static async updateItem(id: number, data: Partial<ShoppingItemDTO>) {
    const item = await ShoppingItemRepository.findOne({
      where: { id },
      relations: ["category"],
    });

    if (!item) return null;

    if (data.name !== undefined) item.name = data.name;
    if (data.quantity !== undefined) item.quantity = data.quantity;

    if (data.categoryId !== undefined) {
      const category = await CategoryService.findCategoryById(data.categoryId);
      if (!category) throw new Error("Category not found");
      item.category = category;
    }
    return await ShoppingItemRepository.save(item);
  }

  static async deleteItem(id: number) {
    const item = await ShoppingItemRepository.findOneBy({ id });
    if (!item) {
      throw new Error("Item not found");
    }
    return await ShoppingItemRepository.remove(item);
  }
}
