import mongoose, { Document, Schema } from "mongoose";

interface IDownload extends Document {
  url: string;
  format: string;
  status: string;
  createdAt: Date;
}

const downloadSchema: Schema = new Schema({
  url: { type: String, required: true },
  format: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Download = mongoose.model<IDownload>("Download", downloadSchema);

export default Download;
