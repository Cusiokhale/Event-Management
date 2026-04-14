import type { RsvpItem, RsvpStatus } from "../types/rsvp";

const BASE_URL = "http://localhost:3000/api/v1/rsvps";

export function normalizeName(value: string): string {
  return value.trim();
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function isRsvpInputValid(guestName: string, email: string): boolean {
  const name = normalizeName(guestName);
  const mail = normalizeEmail(email);

  return name.length > 0 && mail.length > 0 && mail.includes("@");
}

export const rsvpService = {
  async getAll(token: string): Promise<RsvpItem[]> {
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch RSVPs");
    }

    return response.json();
  },

  async add(
    token: string,
    guestName: string,
    email: string,
    status: RsvpStatus
  ): Promise<RsvpItem | null> {
    const trimmedGuestName = normalizeName(guestName);
    const trimmedEmail = normalizeEmail(email);

    if (!isRsvpInputValid(trimmedGuestName, trimmedEmail)) {
      return null;
    }

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        guestName: trimmedGuestName,
        email: trimmedEmail,
        status,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create RSVP");
    }

    return response.json();
  },

  async remove(token: string, id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete RSVP");
    }
  },
};