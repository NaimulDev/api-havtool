import mongoose, { Schema, Document } from "mongoose";

export interface IVideoDocument extends Document {
  url: string;
  title: string;
  thumbnail: string;
  videoSize: string;
  audioSize: string;
}

const VideoSchema: Schema = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  videoSize: { type: String, required: true },
  audioSize: { type: String, required: true },
});

export const Video = mongoose.model<IVideoDocument>("Video", VideoSchema);
