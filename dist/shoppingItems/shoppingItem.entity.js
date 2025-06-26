var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "../categories/category.entity";
let ShoppingItem = class ShoppingItem {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ShoppingItem.prototype, "id", void 0);
__decorate([
    Column({ type: "nvarchar", length: 255 }),
    __metadata("design:type", String)
], ShoppingItem.prototype, "name", void 0);
__decorate([
    Column({ type: "int" }),
    __metadata("design:type", Number)
], ShoppingItem.prototype, "quantity", void 0);
__decorate([
    ManyToOne(() => Category, { nullable: false, onDelete: "CASCADE" }),
    JoinColumn({ name: "category" }),
    __metadata("design:type", Category)
], ShoppingItem.prototype, "category", void 0);
ShoppingItem = __decorate([
    Entity("shopping_items")
], ShoppingItem);
export { ShoppingItem };
