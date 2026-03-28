import { useEffect, useState } from "react";
import type { ServiceItem } from "../types/service";
import { serviceService } from "../services/serviceService";

export function useServices() {
  const [services, setServices] = useState<ServiceItem[]>([]);

  function refresh() {
    setServices(serviceService.getAll());
  }

  useEffect(() => {
    refresh();
  }, []);

  function addService(name: string, category: string) {
    const created = serviceService.add(name, category);
    if (!created) return;
    refresh();
  }

  function removeService(id: string) {
    serviceService.remove(id);
    refresh();
  }

  return { services, addService, removeService };
}