import express, { Router } from "express";
import http from "http";
import bodyParse from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import router from "./Router/index";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParse.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running on http port 8080 🚀");
});

app.use("/", router());
