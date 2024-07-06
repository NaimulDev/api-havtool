"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ttRoutes = void 0;
const express_1 = require("express");
const tt_controller_1 = require("./tt.controller");
const router = (0, express_1.Router)();
router.post("/video", tt_controller_1.downloadTikTokVideo);
exports.ttRoutes = router;
