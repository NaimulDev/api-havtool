"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlRoutes = void 0;
const express_1 = require("express");
const url_controller_1 = require("./url.controller");
const router = (0, express_1.Router)();
router.post("/shorten", url_controller_1.shortenUrl);
router.get("/:urlCode", url_controller_1.redirectUrl);
exports.urlRoutes = router;
