import mongoose from "mongoose";
import { IUrl } from "./url.interface";

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  urlCode: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model<IUrl>("Url", urlSchema);
