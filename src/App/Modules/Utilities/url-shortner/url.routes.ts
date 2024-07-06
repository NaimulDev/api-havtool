import { Router } from "express";
import { shortenUrl, redirectUrl } from "./url.controller";

const router = Router();

router.post("/shorten", shortenUrl);
router.get("/:urlCode", redirectUrl);

export const urlRoutes = router;
