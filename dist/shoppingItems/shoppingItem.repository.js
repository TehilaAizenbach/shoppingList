"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingItemRepository = void 0;
const data_source_1 = require("../data-source");
const shoppingItem_entity_1 = require("./shoppingItem.entity");
exports.ShoppingItemRepository = data_source_1.AppDataSource.getRepository(shoppingItem_entity_1.ShoppingItem);
