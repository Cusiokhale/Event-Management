import cors from "cors";
import express, { Express } from "express";

import serviceRoutes from "./api/v1/routes/serviceRoutes.js";
import rsvpRoutes from "./api/v1/routes/rsvpRoutes.js";

const app: Express = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/", (_req, res) => {
  res.send("Backend is running");
});

// Existing route (your part)
app.use("/api/v1/services", serviceRoutes);

// NEW RSVP route (Cordelia's part)
app.use("/api/v1/rsvps", rsvpRoutes);

export default app;