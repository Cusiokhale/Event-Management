import { useEffect, useState } from "react";
import type { ServiceItem } from "../types/service";
import { serviceService } from "../services/serviceService";

export function useServices() {
  const [services, setServices] = useState<ServiceItem[]>([]);

  async function refresh() {
    const allServices = await serviceService.getAll();
    setServices(allServices);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function addService(name: string, category: string) {
    const created = await serviceService.add(name, category);
    if (!created) return;
    await refresh();
  }

  async function removeService(id: string) {
    await serviceService.remove(id);
    await refresh();
  }

  return { services, addService, removeService };
}