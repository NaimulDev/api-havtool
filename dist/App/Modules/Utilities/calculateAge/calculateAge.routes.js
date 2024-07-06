"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRoutes = void 0;
const express_1 = require("express");
const calculateAge_controller_1 = require("./calculateAge.controller");
const router = (0, express_1.Router)();
// Handle preflight requests
// router.options("*", cors());
router.post("/calculate-age", calculateAge_controller_1.calculateAge);
exports.calculateRoutes = router;
