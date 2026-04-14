import type { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import {
  createRsvp,
  deleteRsvpById,
  getAllRsvps,
} from "../services/rsvpService.js";

export const fetchRsvps = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const rsvps = await getAllRsvps(userId);
    return res.status(200).json(rsvps);
  } catch (error) {
    console.error("fetchRsvps error:", error);
    return res.status(500).json({ message: "Failed to fetch RSVPs", error });
  }
};

export const addRsvp = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { guestName, email, status } = req.body;

    if (!guestName || !email || !status) {
      return res.status(400).json({
        message: "guestName, email, and status are required.",
      });
    }

    const newRsvp = await createRsvp(userId, guestName, email, status);
    return res.status(201).json(newRsvp);
  } catch (error) {
    console.error("addRsvp error:", error);
    return res.status(500).json({ message: "Failed to create RSVP", error });
  }
};

export const removeRsvp = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid RSVP id." });
    }

    const result = await deleteRsvpById(userId, id);

    if (result.count === 0) {
      return res.status(404).json({
        message: "RSVP not found for this user.",
      });
    }

    return res.status(200).json({
      message: "RSVP deleted successfully.",
    });
  } catch (error) {
    console.error("removeRsvp error:", error);
    return res.status(500).json({ message: "Failed to delete RSVP", error });
  }
};