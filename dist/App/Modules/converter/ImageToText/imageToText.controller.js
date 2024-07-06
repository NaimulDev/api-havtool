"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTextFromImage = void 0;
const tesseract_js_1 = __importDefault(require("tesseract.js"));
const fs_1 = __importDefault(require("fs"));
const imageToText_model_1 = require("./imageToText.model");
const extractTextFromImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const imagePath = req.file.path;
        tesseract_js_1.default.recognize(imagePath, "eng")
            .then(({ data: { text } }) => {
            const newImageText = new imageToText_model_1.ImageText({
                imageUrl: imagePath,
                extractedText: text,
            });
            newImageText.save().then((imageText) => res.json(imageText));
        })
            .finally(() => fs_1.default.unlinkSync(imagePath));
    }
    catch (err) {
        res.status(500).json({ error: "Failed to extract text from image" });
    }
});
exports.extractTextFromImage = extractTextFromImage;
