"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("./../middlewares");
exports.default = (function (app) {
    app.use(middlewares_1.bodyParser);
    app.use(middlewares_1.contentType);
    app.use(middlewares_1.cors);
    app.use(express_1.default.static("."));
});
