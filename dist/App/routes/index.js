"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const yt_routes_1 = require("../Modules/downloader/yt/yt.routes");
// import { usersRoutes } from "../Modules/user/user.routes";
// import { fbRoutes } from "../Modules/downloader/fb/fb.routes";
// import { ttRoutes } from "../Modules/downloader/tt/tt.routes";
// import { imageToTextRoutes } from "../Modules/converter/ImageToText/imageToText.routes";
const url_routes_1 = require("../Modules/Utilities/url-shortner/url.routes");
const calculateAge_routes_1 = require("../Modules/Utilities/calculateAge/calculateAge.routes");
// import { imageToTextRoutes } from "../Modules/converter/ImageToText/imageToText.routes";
const router = (0, express_1.Router)();
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
        route: yt_routes_1.ytRoutes,
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
        route: calculateAge_routes_1.calculateRoutes,
    },
    {
        path: "/url",
        route: url_routes_1.urlRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
