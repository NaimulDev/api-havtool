import { Router } from "express";
import { downloadTikTokVideo } from "./tt.controller";

const router = Router();

router.post("/video", downloadTikTokVideo);

export const ttRoutes = router;
