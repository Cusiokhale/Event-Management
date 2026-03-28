import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend is running");
});

export default app;