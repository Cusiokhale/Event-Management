import express from "express";
import {
  addRsvp,
  fetchRsvps,
  removeRsvp,
} from "../controllers/rsvpController.js";

const router = express.Router();

router.get("/", fetchRsvps);
router.post("/", addRsvp);
router.delete("/:id", removeRsvp);

export default router;