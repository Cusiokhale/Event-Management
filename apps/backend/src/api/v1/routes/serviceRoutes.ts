import express from "express";
import {
  fetchServices,
  addService,
  removeService,
} from "../controllers/serviceController.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.get("/", requireAuth(), fetchServices);
router.post("/", requireAuth(), addService);
router.delete("/:id", requireAuth(), removeService);

export default router;