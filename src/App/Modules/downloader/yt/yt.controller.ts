import { Request, Response } from "express";
import ytdl from "ytdl-core";
import { fetchVideoData } from "./yt.services";

const getVideoInfo = async (req: Request, res: Response) => {
  const { url } = req.body;
  if (!ytdl.validateURL(url)) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  try {
    const data = await fetchVideoData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch video data" });
  }
};

const downloadVideoOrAudio = async (req: Request, res: Response) => {
  const { url, format } = req.query;
  if (!ytdl.validateURL(url as string)) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  res.header(
    "Content-Disposition",
    `attachment; filename="download.${format === "audio" ? "mp3" : "mp4"}"`
  );
  ytdl(url as string, {
    filter: format === "audio" ? "audioonly" : "videoonly",
  }).pipe(res);
};

export { getVideoInfo, downloadVideoOrAudio };

// import { Request, Response } from "express";
// import ytdl from "ytdl-core";
// import { fetchVideoData } from "./yt.services";

// const getVideoInfo = async (req: Request, res: Response) => {
//   const { url } = req.body;
//   console.log("Received URL:", url);
//   if (!ytdl.validateURL(url)) {
//     console.log("Invalid YouTube URL");
//     return res.status(400).json({ error: "Invalid YouTube URL" });
//   }

//   try {
//     console.time("fetchVideoData");
//     const data = await fetchVideoData(url);
//     console.timeEnd("fetchVideoData");
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching video data:", error);
//     res.status(500).json({ error: "Failed to fetch video data" });
//   }
// };

// const downloadVideoOrAudio = async (req: Request, res: Response) => {
//   const { url, format } = req.query;
//   console.log("Received URL:", url);
//   if (!ytdl.validateURL(url as string)) {
//     console.log("Invalid YouTube URL");
//     return res.status(400).json({ error: "Invalid YouTube URL" });
//   }

//   try {
//     res.header(
//       "Content-Disposition",
//       `attachment; filename="download.${format === "audio" ? "mp3" : "mp4"}"`
//     );
//     console.time("ytdl");
//     ytdl(url as string, {
//       filter: format === "audio" ? "audioonly" : "videoonly",
//     }).pipe(res);
//     console.timeEnd("ytdl");
//   } catch (error) {
//     console.error("Error downloading media:", error);
//     res.status(500).json({ error: "Failed to download media" });
//   }
// };

// export { getVideoInfo, downloadVideoOrAudio };
