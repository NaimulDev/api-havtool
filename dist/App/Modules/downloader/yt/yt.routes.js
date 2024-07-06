"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ytRoutes = void 0;
const express_1 = require("express");
const yt_controller_1 = require("./yt.controller");
const router = (0, express_1.Router)();
router.post("/video-info", yt_controller_1.getVideoInfo);
router.get("/download", yt_controller_1.downloadVideoOrAudio);
exports.ytRoutes = router;
