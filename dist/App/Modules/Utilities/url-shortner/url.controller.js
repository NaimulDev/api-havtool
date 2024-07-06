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
exports.redirectUrl = exports.shortenUrl = void 0;
const shortid_1 = __importDefault(require("shortid"));
const url_model_1 = __importDefault(require("./url.model"));
const config_1 = __importDefault(require("../../../config"));
// Shorten URL Endpoint
const shortenUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("base url", config_1.default.baseUrl);
    const { originalUrl, customBaseUrl, urlCode } = req.body;
    const baseUrl = customBaseUrl || config_1.default.baseUrl;
    const finalUrlCode = urlCode || shortid_1.default.generate();
    try {
        let url = yield url_model_1.default.findOne({ urlCode: finalUrlCode });
        if (url) {
            return res.status(400).json({ error: "URL code already in use" });
        }
        const shortUrl = `${baseUrl}/${finalUrlCode}`;
        url = new url_model_1.default({
            originalUrl,
            shortUrl,
            urlCode: finalUrlCode,
            date: new Date(),
        });
        yield url.save();
        res.json(url);
    }
    catch (err) {
        console.error(err);
        res.status(500).json("Server error");
    }
});
exports.shortenUrl = shortenUrl;
// Redirect URL Endpoint
const redirectUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { urlCode } = req.params;
    try {
        const url = yield url_model_1.default.findOne({ urlCode });
        if (url) {
            return res.redirect(url.originalUrl);
        }
        else {
            return res.status(404).json("No URL found");
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json("Server error");
    }
});
exports.redirectUrl = redirectUrl;
