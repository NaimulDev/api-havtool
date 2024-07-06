import { Request, Response } from "express";
import { createDownloadRecord } from "./fb.services";

const downloadFacebookVideo = async (req: Request, res: Response) => {
  const { url } = req.body;
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(url);
    const buffer = await response.buffer();

    const download = await createDownloadRecord(url, "video");

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="facebook-video.mp4"`
    );
    res.send(buffer);
  } catch (err) {
    res.status(500).json({ error: "Failed to download Facebook video" });
  }
};

const downloadFacebookReel = async (req: Request, res: Response) => {
  const { url } = req.body;
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(url);
    const buffer = await response.buffer();

    const download = await createDownloadRecord(url, "reel");

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="facebook-reel.mp4"`
    );
    res.send(buffer);
  } catch (err) {
    res.status(500).json({ error: "Failed to download Facebook reel" });
  }
};

export { downloadFacebookVideo, downloadFacebookReel };
