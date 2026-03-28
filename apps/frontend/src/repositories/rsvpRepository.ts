import type { RsvpItem, RsvpStatus } from "../types/rsvp";
import { rsvpTestData } from "../data/rsvpTestData";

let rsvps: RsvpItem[] = [...rsvpTestData];

export const rsvpRepository = {
  // READ (all)
  getAll(): RsvpItem[] {
    return [...rsvps];
  },

  // READ (one)
  getById(id: string): RsvpItem | undefined {
    return rsvps.find((r) => r.id === id);
  },

  // CREATE
  create(guestName: string, email: string, status: RsvpStatus): RsvpItem {
    const newRsvp: RsvpItem = {
      id: crypto.randomUUID(),
      guestName,
      email,
      status,
      createdAt: new Date().toISOString(),
    };

    rsvps = [newRsvp, ...rsvps];
    return newRsvp;
  },

  // UPDATE
  update(id: string, updated: Partial<RsvpItem>): RsvpItem | undefined {
    rsvps = rsvps.map((r) => (r.id === id ? { ...r, ...updated } : r));
    return rsvps.find((r) => r.id === id);
  },

  // DELETE
  delete(id: string): void {
    rsvps = rsvps.filter((r) => r.id !== id);
  },
};