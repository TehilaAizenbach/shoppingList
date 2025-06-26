import { ShoppingItemService } from "./shoppingItem.service";
export class ShoppingItemController {
    static async getItems(req, res) {
        try {
            const items = await ShoppingItemService.getAllItems();
            res.json(items);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to get items", error });
        }
    }
    static async addItem(req, res, next) {
        try {
            const item = await ShoppingItemService.createItem(req.body);
            res.status(201).json(item);
        }
        catch (error) {
            next(error);
        }
    }
    static async updateItem(req, res, next) {
        try {
            const id = Number(req.params.id);
            const data = req.body;
            const updatedItem = await ShoppingItemService.updateItem(id, data);
            if (!updatedItem) {
                res.status(404).json({ message: "Item not found" });
                return;
            }
            res.json(updatedItem);
        }
        catch (error) {
            next(error);
        }
    }
    static async deleteItem(req, res) {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid item ID" });
        }
        try {
            const result = await ShoppingItemService.deleteItem(id);
            res.status(204).send();
        }
        catch (error) {
            if (error.message === "Item not found") {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: "Failed to delete item", error });
        }
    }
}
