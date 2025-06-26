import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "./categories/category.entity"; 
import { ShoppingItem } from "./shoppingItems/shoppingItem.entity";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mssql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 1433,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
  extra: {
    encrypt: true,
    trustServerCertificate: false,
  },
  entities: [Category, ShoppingItem],
  synchronize: true,
  logging: false,
});
