import { Router } from "express";
import { CategoryController } from "./category.controller";
import { asyncHandler } from "../utils/asyncHandler";
import { CategoryDTO } from "../types/category";
import { validateDTO } from "../middleware/validate.dto";

const router = Router();

router.get("/",CategoryController.getCategories);
router.post("/",validateDTO(CategoryDTO),asyncHandler(CategoryController.createCategory));

export default router;
