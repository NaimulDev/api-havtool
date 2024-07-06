export interface IVideoData {
  title: string;
  thumbnail: string;
  videoSize: string;
  audioSize: string;
}

export interface IDownloadRequest {
  url: string;
  format: "video" | "audio";
}
