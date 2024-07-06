import { Router } from "express";
import { calculateAge } from "./calculateAge.controller";

const router = Router();
// Handle preflight requests
// router.options("*", cors());

router.post("/calculate-age", calculateAge);

export const calculateRoutes = router;
