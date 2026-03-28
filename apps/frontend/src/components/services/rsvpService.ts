import type { RsvpItem, RsvpStatus } from "../../types/rsvp";
import { rsvpRepository } from "../../repositories/rsvpRepository";

type BuildRsvpInput = {
  guestName: string;
  email: string;
  status: RsvpStatus;
};

export function isRsvpInputValid(
  guestName: string,
  email: string
): boolean {
  const nameOk = guestName.trim().length > 0;
  const emailOk = email.trim().length > 0;
  return nameOk && emailOk;
}

export function buildRsvpItem(input: BuildRsvpInput): RsvpItem {
  if (!isRsvpInputValid(input.guestName, input.email)) {
    throw new Error("Invalid RSVP input.");
  }

  return {
    id: crypto.randomUUID(),
    guestName: input.guestName.trim(),
    email: input.email.trim(),
    status: input.status,
    createdAt: new Date().toISOString(),
  };
}

/**
 * I.3: Service now integrates repository
 * Component → Hook → Service → Repository
 */
export const rsvpService = {
  getAll(): RsvpItem[] {
    return rsvpRepository.getAll();
  },

  add(input: BuildRsvpInput): RsvpItem | null {
    if (!isRsvpInputValid(input.guestName, input.email)) {
      return null;
    }

    // repository handles persistence
    return rsvpRepository.create(
      input.guestName.trim(),
      input.email.trim(),
      input.status
    );
  },

  remove(id: string): void {
    if (!id.trim()) return;
    rsvpRepository.delete(id);
  },
};