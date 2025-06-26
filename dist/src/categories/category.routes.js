import { Router } from "express";
import { CategoryController } from "./category.controller";
const router = Router();
const controller = new CategoryController();
router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.getAll(req, res));
export default router;
