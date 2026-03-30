import express from "express";
import {
  addService,
  fetchServices,
  removeService,
} from "../controllers/serviceController.js";

const router = express.Router();

router.get("/", fetchServices);
router.post("/", addService);
router.delete("/:id", removeService);

export default router;