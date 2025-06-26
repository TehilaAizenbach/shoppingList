import express from "express";
import categoryRoutes from "./categories/category.routes";
import shoppingItemRoutes from "./shoppingItems/shoppingItem.routes";
import { AppDataSource } from "./data-source";
import cors from "cors";

async function main() {
  await AppDataSource.initialize();
  const app = express();
  app.use(express.json());

  app.use(
    cors({
      origin: "http://localhost:3001",
      credentials: true,
    })
  );

  app.use("/categories", categoryRoutes);
  app.use("/shopping-items", shoppingItemRoutes);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

main().catch((err) => {
  console.error("Failed to start server", err);
});
