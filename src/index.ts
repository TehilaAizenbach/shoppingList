import express from "express";
import categoryRoutes from "./categories/category.routes";
import shoppingItemRoutes from "./shoppingItems/shoppingItem.routes";
import { AppDataSource } from "./data-source";
import cors from "cors";

async function main() {
  await AppDataSource.initialize();
  const app = express();
  app.use(express.json());

const allowedOrigins = [
  "http://localhost:3001",
  "https://shopping-list-client-opal.vercel.app",
  "https://shopping-list-client-82oodoltt-tehilas-projects-7caaf2f4.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));
  app.use("/categories", categoryRoutes);
  app.use("/shopping-items", shoppingItemRoutes);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

main().catch((err) => {
  console.error("Failed to start server", err);
});
