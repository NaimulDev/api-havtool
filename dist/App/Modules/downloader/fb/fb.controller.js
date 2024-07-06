"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFacebookReel = exports.downloadFacebookVideo = void 0;
const fb_services_1 = require("./fb.services");
const downloadFacebookVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    try {
        const fetch = (yield Promise.resolve().then(() => __importStar(require("node-fetch")))).default;
        const response = yield fetch(url);
        const buffer = yield response.buffer();
        const download = yield (0, fb_services_1.createDownloadRecord)(url, "video");
        res.setHeader("Content-Disposition", `attachment; filename="facebook-video.mp4"`);
        res.send(buffer);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to download Facebook video" });
    }
});
exports.downloadFacebookVideo = downloadFacebookVideo;
const downloadFacebookReel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    try {
        const fetch = (yield Promise.resolve().then(() => __importStar(require("node-fetch")))).default;
        const response = yield fetch(url);
        const buffer = yield response.buffer();
        const download = yield (0, fb_services_1.createDownloadRecord)(url, "reel");
        res.setHeader("Content-Disposition", `attachment; filename="facebook-reel.mp4"`);
        res.send(buffer);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to download Facebook reel" });
    }
});
exports.downloadFacebookReel = downloadFacebookReel;