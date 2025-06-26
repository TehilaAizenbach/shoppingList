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
exports.ShoppingUpdateItemDTO = exports.ShoppingItemDTO = void 0;
const class_validator_1 = require("class-validator");
class ShoppingItemDTO {
}
exports.ShoppingItemDTO = ShoppingItemDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name is required" }),
    (0, class_validator_1.IsString)({ message: "Name must be a string" }),
    __metadata("design:type", String)
], ShoppingItemDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "Quantity must be an integer" }),
    (0, class_validator_1.IsPositive)({ message: "Quantity must be positive" }),
    __metadata("design:type", Number)
], ShoppingItemDTO.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "CategoryId must be an integer" }),
    (0, class_validator_1.IsPositive)({ message: "CategoryId must be positive" }),
    __metadata("design:type", Number)
], ShoppingItemDTO.prototype, "categoryId", void 0);
class ShoppingUpdateItemDTO {
}
exports.ShoppingUpdateItemDTO = ShoppingUpdateItemDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Name must be a string" }),
    __metadata("design:type", String)
], ShoppingUpdateItemDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: "Quantity must be an integer" }),
    (0, class_validator_1.IsPositive)({ message: "Quantity must be positive" }),
    __metadata("design:type", Number)
], ShoppingUpdateItemDTO.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: "CategoryId must be an integer" }),
    (0, class_validator_1.IsPositive)({ message: "CategoryId must be positive" }),
    __metadata("design:type", Number)
], ShoppingUpdateItemDTO.prototype, "categoryId", void 0);
