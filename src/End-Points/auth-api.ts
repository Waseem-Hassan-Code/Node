import express from "express";

export const test = async (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({ user: "Ok" });
  } catch (error) {
    res.status(400).send("Error");
  }
};
