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
exports.Cart = void 0;
var typeorm_1 = require("typeorm");
var product_1 = require("./product");
var sale_1 = require("./sale");
var Cart = /** @class */ (function () {
    function Cart() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Cart.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Cart.prototype, "quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Cart.prototype, "price", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return sale_1.Sale; }),
        (0, typeorm_1.JoinColumn)({ name: 'sale_id' }),
        __metadata("design:type", sale_1.Sale)
    ], Cart.prototype, "sale", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_1.Product; }),
        (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
        __metadata("design:type", product_1.Product)
    ], Cart.prototype, "product", void 0);
    Cart = __decorate([
        (0, typeorm_1.Entity)()
    ], Cart);
    return Cart;
}());
exports.Cart = Cart;
