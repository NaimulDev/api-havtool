import { Router } from "express";
import { getVideoInfo, downloadVideoOrAudio } from "./yt.controller";

const router = Router();

router.post("/video-info", getVideoInfo);
router.get("/download", downloadVideoOrAudio);

export const ytRoutes = router;
