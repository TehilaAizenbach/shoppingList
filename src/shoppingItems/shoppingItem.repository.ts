import { AppDataSource } from "../data-source";
import { ShoppingItem } from "./shoppingItem.entity";

export const ShoppingItemRepository = AppDataSource.getRepository(ShoppingItem);
