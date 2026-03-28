import type { ServiceItem } from "../types/service";
import { serviceTestData } from "../data/serviceTestData";

// Initialize repository data from external test data source
let services: ServiceItem[] = [...serviceTestData];

export const serviceRepository = {
  // READ (all)
  getAll(): ServiceItem[] {
    return [...services];
  },

  // READ (one)
  getById(id: string): ServiceItem | undefined {
    return services.find((s) => s.id === id);
  },

  // CREATE
  create(name: string, category: string): ServiceItem {
    const newService: ServiceItem = {
      id: crypto.randomUUID(),
      name,
      category,
      createdAt: new Date().toISOString(),
    };

    services = [newService, ...services];
    return newService;
  },

  // UPDATE
  update(
    id: string,
    updated: Partial<ServiceItem>
  ): ServiceItem | undefined {
    services = services.map((s) =>
      s.id === id ? { ...s, ...updated } : s
    );

    return services.find((s) => s.id === id);
  },

  // DELETE
  delete(id: string): void {
    services = services.filter((s) => s.id !== id);
  },
};