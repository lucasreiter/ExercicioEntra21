"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var datasource_1 = require("./datasource");
datasource_1.default
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var app = express();
app.use(express.json());
var PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("executando em http://localhost:".concat(PORT));
});
