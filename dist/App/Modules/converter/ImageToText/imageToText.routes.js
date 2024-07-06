"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageToTextRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const imageToText_controller_1 = require("./imageToText.controller");
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: "uploads/" });
router.post("/extract-text", upload.single("image"), imageToText_controller_1.extractTextFromImage);
exports.imageToTextRoutes = router;
