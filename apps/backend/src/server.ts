import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (_req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});