import type { ServiceItem } from "../types/service";

let services: ServiceItem[] = [
  {
    id: crypto.randomUUID(),
    name: "Wedding Planning",
    category: "Events",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Corporate Conference",
    category: "Business",
    createdAt: new Date().toISOString(),
  },
];

export const serviceRepository = {
  getAll(): ServiceItem[] {
    return [...services];
  },

  getById(id: string): ServiceItem | undefined {
    return services.find((s) => s.id === id);
  },

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

  update(id: string, updated: Partial<ServiceItem>): ServiceItem | undefined {
    services = services.map((s) =>
      s.id === id ? { ...s, ...updated } : s
    );

    return services.find((s) => s.id === id);
  },

  delete(id: string): void {
    services = services.filter((s) => s.id !== id);
  },
};