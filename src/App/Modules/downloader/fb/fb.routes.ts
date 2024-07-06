import { Router } from "express";
import { downloadFacebookVideo, downloadFacebookReel } from "./fb.controller";

const router = Router();

router.post("/video", downloadFacebookVideo);
router.post("/reel", downloadFacebookReel);

export const fbRoutes = router;
