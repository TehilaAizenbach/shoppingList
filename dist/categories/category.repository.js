"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const data_source_1 = require("../data-source");
const category_entity_1 = require("./category.entity");
exports.CategoryRepository = data_source_1.AppDataSource.getRepository(category_entity_1.Category);
