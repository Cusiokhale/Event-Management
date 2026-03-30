import cors from "cors";
import express, { Express } from "express";
import serviceRoutes from "./api/v1/routes/serviceRoutes.js";

const app: Express = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (_req, res) => {
  res.send("Backend is running");
});

app.use("/api/v1/services", serviceRoutes);

export default app;