"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// Server User Root File define
router.get("/", user_controller_1.welcomeServer);
// Post User On Database as a maintain User Schema
router.post("/save-new-user-info", user_controller_1.createUser);
exports.usersRoutes = router;
