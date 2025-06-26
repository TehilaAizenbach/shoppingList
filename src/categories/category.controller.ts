import { NextFunction, Request, Response } from "express";
import { CategoryService } from "./category.service";

export class CategoryController {
  static async getCategories(req: Request, res: Response) {
    try {
      const categories = await CategoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to get categories", error });
    }
  }

  static async createCategory(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const category = await CategoryService.createCategory(name);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to create category", error });
    }
  }
}
