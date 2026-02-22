import type { ServiceItem } from "../types/service";
import { serviceRepository } from "../repositories/serviceRepository";

export const serviceService = {
  getAll(): ServiceItem[] {
    return serviceRepository.getAll();
  },

  add(name: string, category: string): ServiceItem | null {
    // validate first
    const trimmedName = name.trim();
    const trimmedCategory = category.trim();

    if (trimmedName.length === 0 || trimmedCategory.length === 0) {
      return null;
    }

    // act after validation
    return serviceRepository.create(trimmedName, trimmedCategory);
  },

  remove(id: string): void {
    const trimmedId = id.trim();
    if (trimmedId.length === 0) return;

    serviceRepository.delete(trimmedId);
  },
};