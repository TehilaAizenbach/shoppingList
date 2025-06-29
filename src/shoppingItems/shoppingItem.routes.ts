import { Router } from "express";
import { ShoppingItemController } from "./shoppingItem.controller";
import { asyncHandler } from "../utils/asyncHandler";
import { validateDTO } from "../middleware/validate.dto";
import { ShoppingItemDTO, ShoppingUpdateItemDTO } from "../types/shopping_item";

const router = Router();

router.get("/", ShoppingItemController.getItems);
router.post("/", validateDTO(ShoppingItemDTO), asyncHandler(ShoppingItemController.addItem));
router.put("/:id", validateDTO(ShoppingUpdateItemDTO), asyncHandler(ShoppingItemController.updateItem));
router.delete("/:id", asyncHandler(ShoppingItemController.deleteItem));

export default router;
