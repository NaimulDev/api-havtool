import Download from "../download";

const createDownloadRecord = async (url: string, format: string) => {
  const newDownload = new Download({ url, format, status: "pending" });
  await newDownload.save();
  return newDownload;
};

export { createDownloadRecord };
