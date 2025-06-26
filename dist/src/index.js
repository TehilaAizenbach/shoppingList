import express from "express";
import categoryRoutes from "./categories/category.routes";
import { AppDataSource } from "./data-source";
const app = express();
app.use(express.json());
console.log("Starting DataSource initialization...");
await AppDataSource.initialize();
console.log("DataSource initialized successfully");
app.use("/categories", categoryRoutes);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
