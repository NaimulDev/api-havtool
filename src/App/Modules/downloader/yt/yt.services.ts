import ytdl from "ytdl-core";
import { IVideoData } from "./yt.interface";

export const fetchVideoData = async (url: string): Promise<IVideoData> => {
  const info = await ytdl.getInfo(url);
  const videoFormats = ytdl.filterFormats(info.formats, "videoonly");
  const audioFormats = ytdl.filterFormats(info.formats, "audioonly");

  return {
    title: info.videoDetails.title,
    thumbnail: info.videoDetails.thumbnails.pop()?.url || "",
    videoSize: videoFormats[0].contentLength || "0",
    audioSize: audioFormats[0].contentLength || "0",
  };
};
// import NodeCache from "node-cache";
// import ytdl from "ytdl-core";
// import { IVideoData } from "./yt.interface";

// const videoCache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

// export const fetchVideoData = async (url: string): Promise<IVideoData> => {
//   const cachedData = videoCache.get<IVideoData>(url);
//   if (cachedData) {
//     console.log("Returning cached data");
//     return cachedData;
//   }

//   console.time("ytdl.getInfo");
//   const info = await ytdl.getInfo(url);
//   console.timeEnd("ytdl.getInfo");
//   const videoFormats = ytdl.filterFormats(info.formats, "videoonly");
//   const audioFormats = ytdl.filterFormats(info.formats, "audioonly");

//   const videoData: IVideoData = {
//     title: info.videoDetails.title,
//     thumbnail: info.videoDetails.thumbnails.pop()?.url || "",
//     videoSize: videoFormats[0].contentLength || "0",
//     audioSize: audioFormats[0].contentLength || "0",
//   };

//   videoCache.set(url, videoData); // Cache the fetched data
//   return videoData;
// };
