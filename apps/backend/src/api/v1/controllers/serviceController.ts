import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import {
  createService,
  deleteServiceById,
  getAllServices,
} from "../services/serviceService.js";

export const fetchServices = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const services = await getAllServices(userId);
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services", error });
  }
};

export const addService = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { name, category } = req.body;

    if (!name || !category) {
      return res
        .status(400)
        .json({ message: "Name and category are required." });
    }

    const newService = await createService(userId, name, category);
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: "Failed to create service", error });
  }
};

export const removeService = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid service id." });
    }

    await deleteServiceById(userId, id);
    res.status(200).json({ message: "Service deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete service", error });
  }
};