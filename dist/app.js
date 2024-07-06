"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./App/routes"));
const app = (0, express_1.default)();
// Increase the default max listeners
const EventEmitter = require("events");
EventEmitter.defaultMaxListeners = 20;
// Apply CORS middleware
app.use((0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://www.havtool.com",
        "https://havtool.com",
        "https://havtool.vercel.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}));
// Parse Data
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello Devs!");
});
// Application routes
app.use("/api/v1", routes_1.default);
// app.use(globalErrorHandler);
exports.default = app;
