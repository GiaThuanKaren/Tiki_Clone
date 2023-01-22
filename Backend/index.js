"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongo_1 = require("./src/config/mongo");
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 5500;
(0, mongo_1.Connect)();
app.listen(PORT, function () {
    console.log("\n    Listening at ".concat(PORT, " port"));
});
