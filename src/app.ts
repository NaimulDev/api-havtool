import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./App/routes";

const app: Application = express();

// Increase the default max listeners
const EventEmitter = require("events");
EventEmitter.defaultMaxListeners = 20;

// Apply CORS middleware
app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.havtool.com",
      "https://havtool.com",
      "https://havtool.vercel.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// Parse Data
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Devs!");
});

// Application routes
app.use("/api/v1", router);

// app.use(globalErrorHandler);

export default app;
