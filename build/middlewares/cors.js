"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
var cors = function (req, res, next) {
    res.set('access-control-allow-origin', '*');
    res.set('access-control-allow-methods', '*');
    res.set('access-control-allow-header', '*');
    res.set('access-control-allow-headers', '*');
    next();
};
exports.cors = cors;
