import type { RsvpItem, RsvpStatus } from "../../types/rsvp";

type BuildRsvpInput = {
  guestName: string;
  email: string;
  status: RsvpStatus;
};

export function isRsvpInputValid(guestName: string, email: string): boolean {
  const nameOk = guestName.trim().length > 0;
  const emailOk = email.trim().length > 0;
  return nameOk && emailOk;
}

export function buildRsvpItem(input: BuildRsvpInput): RsvpItem {
  // validate first
  if (!isRsvpInputValid(input.guestName, input.email)) {
    throw new Error("Invalid RSVP input.");
  }

  // build after validation
  return {
  id: crypto.randomUUID(),
  guestName: input.guestName.trim(),
  email: input.email.trim(),
  status: input.status,
  createdAt: new Date().toISOString(),
};
}