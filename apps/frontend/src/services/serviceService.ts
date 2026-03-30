import type { ServiceItem } from "../types/service";

const BASE_URL = "http://localhost:3000/api/v1/services";

export const serviceService = {
  async getAll(): Promise<ServiceItem[]> {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    return response.json();
  },

  async add(name: string, category: string): Promise<ServiceItem | null> {
    const trimmedName = name.trim();
    const trimmedCategory = category.trim();

    if (!trimmedName || !trimmedCategory) {
      return null;
    }

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: trimmedName,
        category: trimmedCategory,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create service");
    }

    return response.json();
  },

  async remove(id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete service");
    }
  },
};
