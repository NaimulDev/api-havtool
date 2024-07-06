import express from "express";
import { createUser, welcomeServer } from "./user.controller";

const router = express.Router();

// Server User Root File define
router.get("/", welcomeServer);

// Post User On Database as a maintain User Schema
router.post("/save-new-user-info", createUser);

export const usersRoutes = router;
