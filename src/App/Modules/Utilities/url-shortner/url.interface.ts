import { Document } from "mongoose";

export interface IUrl extends Document {
  originalUrl: string;
  shortUrl: string;
  urlCode: string;
  date: Date;
}
