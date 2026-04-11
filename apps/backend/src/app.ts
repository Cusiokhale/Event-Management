import cors from "cors";
import express, { type Express } from "express";
import { clerkMiddleware } from "@clerk/express";
import serviceRoutes from "./api/v1/routes/serviceRoutes.js";
import rsvpRoutes from "./api/v1/routes/rsvpRoutes.js";

const app: Express = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(clerkMiddleware());

app.get("/", (_req, res) => {
  res.send("Backend is running");
});

app.use("/api/v1/services", serviceRoutes);
app.use("/api/v1/rsvps", rsvpRoutes);

export default app;