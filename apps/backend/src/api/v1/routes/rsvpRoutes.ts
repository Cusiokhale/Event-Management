import express from "express";
import {
  addRsvp,
  fetchRsvps,
  removeRsvp,
} from "../controllers/rsvpController.js";
import { requireClerkAuth } from "../middleware/requireClerkAuth.js";

const router = express.Router();

router.get("/", requireClerkAuth, fetchRsvps);
router.post("/", requireClerkAuth, addRsvp);
router.delete("/:id", requireClerkAuth, removeRsvp);

export default router;