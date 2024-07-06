"use strict";
// import { Request, Response } from "express";
// import ytdl from "ytdl-core";
// import { fetchVideoData } from "./yt.services";
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
exports.downloadVideoOrAudio = exports.getVideoInfo = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const yt_services_1 = require("./yt.services");
const getVideoInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    console.log("Received URL:", url);
    if (!ytdl_core_1.default.validateURL(url)) {
        console.log("Invalid YouTube URL");
        return res.status(400).json({ error: "Invalid YouTube URL" });
    }
    try {
        console.time("fetchVideoData");
        const data = yield (0, yt_services_1.fetchVideoData)(url);
        console.timeEnd("fetchVideoData");
        res.json(data);
    }
    catch (error) {
        console.error("Error fetching video data:", error);
        res.status(500).json({ error: "Failed to fetch video data" });
    }
});
exports.getVideoInfo = getVideoInfo;
const downloadVideoOrAudio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, format } = req.query;
    console.log("Received URL:", url);
    if (!ytdl_core_1.default.validateURL(url)) {
        console.log("Invalid YouTube URL");
        return res.status(400).json({ error: "Invalid YouTube URL" });
    }
    try {
        res.header("Content-Disposition", `attachment; filename="download.${format === "audio" ? "mp3" : "mp4"}"`);
        console.time("ytdl");
        (0, ytdl_core_1.default)(url, {
            filter: format === "audio" ? "audioonly" : "videoonly",
        }).pipe(res);
        console.timeEnd("ytdl");
    }
    catch (error) {
        console.error("Error downloading media:", error);
        res.status(500).json({ error: "Failed to download media" });
    }
});
exports.downloadVideoOrAudio = downloadVideoOrAudio;
