import type { RsvpItem, RsvpStatus } from "../types/rsvp";
import { rsvpTestData } from "../data/rsvpTestData";

let rsvps: RsvpItem[] = [...rsvpTestData];

export const rsvpRepository = {
  getAll(): RsvpItem[] {
    return [...rsvps];
  },

  create(guestName: string, email: string, status: RsvpStatus): RsvpItem {
    const nextId =
      rsvps.length > 0 ? Math.max(...rsvps.map((rsvp) => rsvp.id)) + 1 : 1;

    const newRsvp: RsvpItem = {
      id: nextId,
      guestName,
      email,
      status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    rsvps = [newRsvp, ...rsvps];
    return newRsvp;
  },

  delete(id: number): void {
    rsvps = rsvps.filter((rsvp) => rsvp.id !== id);
  },
};