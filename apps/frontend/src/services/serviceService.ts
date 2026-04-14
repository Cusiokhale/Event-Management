import type { ServiceItem } from "../types/service";

const BASE_URL = "http://localhost:3000/api/v1/services";

type BackendCategory = {
  id: number;
  name: string;
};

type BackendService = {
  id: number;
  name: string;
  category: BackendCategory;
  createdAt: string;
  updatedAt: string;
};

function mapService(service: BackendService): ServiceItem {
  return {
    id: service.id,
    name: service.name,
    category: service.category.name,
    createdAt: service.createdAt,
    updatedAt: service.updatedAt,
  };
}

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

    const data: BackendService[] = await response.json();
    return data.map(mapService);
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

    const data: BackendService = await response.json();
    return mapService(data);
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