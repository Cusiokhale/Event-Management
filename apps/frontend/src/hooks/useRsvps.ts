import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import type { RsvpItem, RsvpStatus } from "../types/rsvp";
import { rsvpService } from "../services/rsvpService";

export function useRsvps() {
  const [rsvps, setRsvps] = useState<RsvpItem[]>([]);
  const { getToken, isSignedIn } = useAuth();

  async function refresh() {
    if (!isSignedIn) {
      setRsvps([]);
      return;
    }

    const token = await getToken();

    if (!token) {
      setRsvps([]);
      return;
    }

    const data = await rsvpService.getAll(token);
    setRsvps(data);
  }

  useEffect(() => {
    refresh();
  }, [isSignedIn]);

  async function addRsvp(
    guestName: string,
    email: string,
    status: RsvpStatus
  ) {
    if (!isSignedIn) return;

    const token = await getToken();
    if (!token) return;

    const created = await rsvpService.add(token, guestName, email, status);
    if (!created) return;

    await refresh();
  }

  async function removeRsvp(id: number) {
    if (!isSignedIn) return;

    const token = await getToken();
    if (!token) return;

    await rsvpService.remove(token, id);
    await refresh();
  }

  return { rsvps, addRsvp, removeRsvp };
}