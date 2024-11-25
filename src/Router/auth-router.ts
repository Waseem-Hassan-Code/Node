import express from "express";
import { test } from "../End-Points/auth-api";

const testFunc = (req: express.Request, res: express.Response) => {
  res.send(200);
};
export default (router: express.Router) => {
  router.get("/auth/register", testFunc);
};
