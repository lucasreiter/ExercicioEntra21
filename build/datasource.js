"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var cart_1 = require("./entity/cart");
var client_1 = require("./entity/client");
var product_1 = require("./entity/product");
var sale_1 = require("./entity/sale");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    entities: [client_1.Client, sale_1.Sale, product_1.Product, cart_1.Cart],
    logging: false,
    synchronize: true,
});
exports.default = dataSource;
