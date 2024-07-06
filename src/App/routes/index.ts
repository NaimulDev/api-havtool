import { Router } from "express";
import { ytRoutes } from "../Modules/downloader/yt/yt.routes";
// import { usersRoutes } from "../Modules/user/user.routes";
// import { fbRoutes } from "../Modules/downloader/fb/fb.routes";
// import { ttRoutes } from "../Modules/downloader/tt/tt.routes";
// import { imageToTextRoutes } from "../Modules/converter/ImageToText/imageToText.routes";
import { urlRoutes } from "../Modules/Utilities/url-shortner/url.routes";
import { calculateRoutes } from "../Modules/Utilities/calculateAge/calculateAge.routes";
// import { imageToTextRoutes } from "../Modules/converter/ImageToText/imageToText.routes";

const router = Router();

const moduleRoutes = [
  // {
  //   path: "/auth",
  //   route: authRoutes,
  // },
  // {
  //   path: "/users",
  //   route: usersRoutes,
  // },
  {
    path: "/yt",
    route: ytRoutes,
  },
  // {
  //   path: "/fb",
  //   route: fbRoutes,
  // },
  // {
  //   path: "/tiktok",
  //   route: ttRoutes,
  // },
  // {
  //   path: "/imageToText",
  //   route: imageToTextRoutes,
  // },
  {
    path: "/calculate",
    route: calculateRoutes,
  },
  {
    path: "/url",
    route: urlRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
