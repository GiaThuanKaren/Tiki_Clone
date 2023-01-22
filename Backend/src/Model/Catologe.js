"use strict";
exports.__esModule = true;
exports.Catologe = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
exports.Catologe = new Schema({
    title: { type: String, "default": "" },
    link: { type: String, "default": "" },
    originalLink: { type: String, "default": "" },
    img: { type: String, "default": "" }
}, {
    timestamps: true
});
