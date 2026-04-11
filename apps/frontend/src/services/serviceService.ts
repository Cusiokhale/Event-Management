import type { ServiceItem } from "../types/service";

const BASE_URL = "http://localhost:3000/api/v1/services";

export const serviceService = {
  async getAll(token: string): Promise<ServiceItem[]> {
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    return response.json();
  },

  async add(
    token: string,
    name: string,
    category: string
  ): Promise<ServiceItem | null> {
    const trimmedName = name.trim();
    const trimmedCategory = category.trim();

    if (!trimmedName || !trimmedCategory) {
      return null;
    }

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

  async remove(token: string, id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete service");
    }
  },
};