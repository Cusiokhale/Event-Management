import type { ServiceItem } from "../types/service";

const API_BASE_URL = "http://localhost:3000/api/v1/services";

export const serviceRepository = {
  async getAll(): Promise<ServiceItem[]> {
    const res = await fetch(API_BASE_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    return res.json();
  },

  async create(name: string, category: string): Promise<ServiceItem> {
    const res = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, category }),
    });

    if (!res.ok) {
      throw new Error("Failed to create service");
    }

    return res.json();
  },

  async delete(id: string): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete service");
    }
  },
};