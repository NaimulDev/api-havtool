"use strict";
// import ytdl from "ytdl-core";
// import { IVideoData } from "./yt.interface";
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
exports.fetchVideoData = void 0;
// export const fetchVideoData = async (url: string): Promise<IVideoData> => {
//   const info = await ytdl.getInfo(url);
//   const videoFormats = ytdl.filterFormats(info.formats, "videoonly");
//   const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
//   return {
//     title: info.videoDetails.title,
//     thumbnail: info.videoDetails.thumbnails.pop()?.url || "",
//     videoSize: videoFormats[0].contentLength || "0",
//     audioSize: audioFormats[0].contentLength || "0",
//   };
// };
const node_cache_1 = __importDefault(require("node-cache"));
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const videoCache = new node_cache_1.default({ stdTTL: 3600 }); // Cache for 1 hour
const fetchVideoData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const cachedData = videoCache.get(url);
    if (cachedData) {
        console.log("Returning cached data");
        return cachedData;
    }
    console.time("ytdl.getInfo");
    const info = yield ytdl_core_1.default.getInfo(url);
    console.timeEnd("ytdl.getInfo");
    const videoFormats = ytdl_core_1.default.filterFormats(info.formats, "videoonly");
    const audioFormats = ytdl_core_1.default.filterFormats(info.formats, "audioonly");
    const videoData = {
        title: info.videoDetails.title,
        thumbnail: ((_a = info.videoDetails.thumbnails.pop()) === null || _a === void 0 ? void 0 : _a.url) || "",
        videoSize: videoFormats[0].contentLength || "0",
        audioSize: audioFormats[0].contentLength || "0",
    };
    videoCache.set(url, videoData); // Cache the fetched data
    return videoData;
});
exports.fetchVideoData = fetchVideoData;
