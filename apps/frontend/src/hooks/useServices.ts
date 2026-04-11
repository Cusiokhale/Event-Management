import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import type { ServiceItem } from "../types/service";
import { serviceService } from "../services/serviceService";

export function useServices() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const { getToken, isSignedIn } = useAuth();

  async function refresh() {
    if (!isSignedIn) {
      setServices([]);
      return;
    }

    const token = await getToken();

    if (!token) {
      setServices([]);
      return;
    }

    const data = await serviceService.getAll(token);
    setServices(data);
  }

  useEffect(() => {
    refresh();
  }, [isSignedIn]);

  async function addService(name: string, category: string) {
    if (!isSignedIn) return;

    const token = await getToken();
    if (!token) return;

    const created = await serviceService.add(token, name, category);
    if (!created) return;

    await refresh();
  }

  async function removeService(id: number) {
    if (!isSignedIn) return;

    const token = await getToken();
    if (!token) return;

    await serviceService.remove(token, id);
    await refresh();
  }

  return { services, addService, removeService };
}