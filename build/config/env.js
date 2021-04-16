"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    stripeToken: process.env.STRIPE_KEY || ''
};
