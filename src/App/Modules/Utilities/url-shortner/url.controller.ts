import { Request, Response } from "express";
import shortid from "shortid";
import Url from "./url.model";
import config from "../../../config";

// Shorten URL Endpoint
export const shortenUrl = async (req: Request, res: Response) => {
  console.log("base url", config.baseUrl);
  const { originalUrl, customBaseUrl, urlCode } = req.body;
  const baseUrl = customBaseUrl || config.baseUrl;
  const finalUrlCode = urlCode || shortid.generate();

  try {
    let url = await Url.findOne({ urlCode: finalUrlCode });

    if (url) {
      return res.status(400).json({ error: "URL code already in use" });
    }

    const shortUrl = `${baseUrl}/${finalUrlCode}`;

    url = new Url({
      originalUrl,
      shortUrl,
      urlCode: finalUrlCode,
      date: new Date(),
    });

    await url.save();

    res.json(url);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
};

// Redirect URL Endpoint
export const redirectUrl = async (req: Request, res: Response) => {
  const { urlCode } = req.params;
  try {
    const url = await Url.findOne({ urlCode });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json("No URL found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
};
