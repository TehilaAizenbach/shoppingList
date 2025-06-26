import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "./categories/category.entity";
export const AppDataSource = new DataSource({
    type: "mssql",
    host: "shoppinglist-sql-2406.database.windows.net",
    port: 1433,
    username: "sqladmin",
    password: "tE110702",
    database: "shoppinglist_db",
    options: {
        encrypt: true,
        trustServerCertificate: false,
    },
    extra: {
        encrypt: true,
        trustServerCertificate: false,
    },
    entities: [Category],
    synchronize: true,
    logging: false,
});
