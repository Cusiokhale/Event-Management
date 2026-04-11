import type { Request, Response } from "express";
import {
  createRsvp,
  deleteRsvpById,
  getAllRsvps,
} from "../services/rsvpService.js";

export const fetchRsvps = async (req: Request, res: Response) => {
  try {
    const rsvps = await getAllRsvps();
    return res.status(200).json(rsvps);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch RSVPs", error });
  }
};

export const addRsvp = async (req: Request, res: Response) => {
  try {
    const { guestName, email, status } = req.body;

    if (!guestName || !email || !status) {
      return res.status(400).json({
        message: "guestName, email, and status are required.",
      });
    }

    const newRsvp = await createRsvp(guestName, email, status);
    return res.status(201).json(newRsvp);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create RSVP", error });
  }
};

export const removeRsvp = async (req: Request, res: Response) => {
  try {
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;

    if (!id) {
      return res.status(400).json({ message: "RSVP id is required." });
    }

    await deleteRsvpById(id);
    return res.status(200).json({ message: "RSVP deleted successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete RSVP", error });
  }
};
