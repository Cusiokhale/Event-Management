import express from "express";
import {
  addService,
  fetchServices,
  removeService,
} from "../controllers/serviceController.js";
import { requireClerkAuth } from "../middleware/requireClerkAuth.js";

const router = express.Router();

router.get("/", requireClerkAuth, fetchServices);
router.post("/", requireClerkAuth, addService);
router.delete("/:id", requireClerkAuth, removeService);

export default router;