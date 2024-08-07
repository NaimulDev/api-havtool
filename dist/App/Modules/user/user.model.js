"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number },
    adress: { type: String },
    password: { type: String, required: true }
});
// 3. Create a Model.
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
