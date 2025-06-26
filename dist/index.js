"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_routes_1 = __importDefault(require("./categories/category.routes"));
const shoppingItem_routes_1 = __importDefault(require("./shoppingItems/shoppingItem.routes"));
const data_source_1 = require("./data-source");
const cors_1 = __importDefault(require("cors"));
async function main() {
    await data_source_1.AppDataSource.initialize();
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: "http://localhost:3001",
        credentials: true,
    }));
    app.use("/categories", category_routes_1.default);
    app.use("/shopping-items", shoppingItem_routes_1.default);
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}
main().catch((err) => {
    console.error("Failed to start server", err);
});
