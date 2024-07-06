"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fbRoutes = void 0;
const express_1 = require("express");
const fb_controller_1 = require("./fb.controller");
const router = (0, express_1.Router)();
router.post("/video", fb_controller_1.downloadFacebookVideo);
router.post("/reel", fb_controller_1.downloadFacebookReel);
exports.fbRoutes = router;
