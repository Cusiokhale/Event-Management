import type { RsvpItem, RsvpStatus } from "../types/rsvp";

/**
 * RSVP Service
 *
 * Purpose:
 * Centralizes RSVP business logic so it is consistent and reusable.
 * This file contains NO UI logic and NO data access logic.
 */

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

export function buildRsvpItem(params: {
  guestName: string;
  email: string;
  status: RsvpStatus;
}): RsvpItem {
  return {
    id: crypto.randomUUID(),
    guestName: normalizeName(params.guestName),
    email: normalizeEmail(params.email),
    status: params.status,
    createdAt: new Date().toISOString(),
  };
}
