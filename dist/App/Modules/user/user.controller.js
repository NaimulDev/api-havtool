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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.welcomeServer = void 0;
const user_services_1 = require("./user.services");
const welcomeServer = (req, res, Next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({
        message: "Welcome Havetool Your Server is Succesfully running. Remember no pain no gain!!"
    });
});
exports.welcomeServer = welcomeServer;
const createUser = (req, res, Next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const user = yield (0, user_services_1.createUserToDB)(data);
    res.status(200).json({
        status: "Success",
        data: user
    });
});
exports.createUser = createUser;
