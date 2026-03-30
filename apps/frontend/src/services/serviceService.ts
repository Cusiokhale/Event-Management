import type { ServiceItem } from "../types/service";
import { serviceRepository } from "../repositories/serviceRepository";

export const serviceService = {
  async getAll(): Promise<ServiceItem[]> {
    return await serviceRepository.getAll();
  },

  async add(name: string, category: string): Promise<ServiceItem | null> {
    const trimmedName = name.trim();
    const trimmedCategory = category.trim();

    if (trimmedName.length === 0 || trimmedCategory.length === 0) {
      return null;
    }

    return await serviceRepository.create(trimmedName, trimmedCategory);
  },

  async remove(id: string): Promise<void> {
    const trimmedId = id.trim();

    if (trimmedId.length === 0) {
      return;
    }

    await serviceRepository.delete(trimmedId);
  },
};