"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongo_1 = require("./src/config/mongo");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5500;
(0, mongo_1.Connect)();
app.listen(PORT, function () {
    console.log("\n    Listening at ".concat(PORT, " port"));
});
