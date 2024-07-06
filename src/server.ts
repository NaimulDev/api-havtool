import mongoose from "mongoose";
import config from "./App/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
    console.log("Database connected succesfully");
  } catch (err) {
    console.log(`Failed to connected with database Error: ${err}`);
  }
}

main().catch((err) => console.log(err));
