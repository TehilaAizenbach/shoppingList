"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingItem = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../categories/category.entity");
let ShoppingItem = class ShoppingItem {
};
exports.ShoppingItem = ShoppingItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ShoppingItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 255 }),
    __metadata("design:type", String)
], ShoppingItem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], ShoppingItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, { nullable: false, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "category" }),
    __metadata("design:type", category_entity_1.Category)
], ShoppingItem.prototype, "category", void 0);
exports.ShoppingItem = ShoppingItem = __decorate([
    (0, typeorm_1.Entity)("shopping_items")
], ShoppingItem);
