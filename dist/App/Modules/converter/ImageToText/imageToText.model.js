"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageText = void 0;
const mongoose_1 = require("mongoose");
const imageTextSchema = new mongoose_1.Schema({
    imageUrl: { type: String, required: true },
    extractedText: { type: String, required: true },
});
exports.ImageText = (0, mongoose_1.model)("ImageText", imageTextSchema);
