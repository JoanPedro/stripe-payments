"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentType = void 0;
var contentType = function (req, res, next) {
    res.type('json');
    next();
};
exports.contentType = contentType;
