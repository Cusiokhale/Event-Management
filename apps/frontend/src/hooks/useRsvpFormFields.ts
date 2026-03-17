import { useState } from "react";
import type { RsvpStatus } from "../types/rsvp";

/**
 * useRsvpFormFields
 *
 * Purpose:
 * This hook manages controlled form state for the RSVP form.
 * It centralizes presentation logic so it can be reused across components.
 *
 * Internal State:
 * - guestName: string
 * - email: string
 * - status: RsvpStatus ("Going" | "Maybe" | "Not going")
 *
 * Returned Values:
 * - guestName: Current guest name input value
 * - setGuestName: Updates guest name input
 * - email: Current email input value
 * - setEmail: Updates email input
 * - status: Current RSVP selection
 * - setStatus: Updates RSVP selection
 * - resetForm(): Resets all fields to default values
 *
 * Note:
 * This hook contains ONLY presentation logic.
 * No business rules or data access logic belong here.
 */
export function useRsvpFormFields() {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<RsvpStatus>("Going");

  function resetForm() {
    setGuestName("");
    setEmail("");
    setStatus("Going");
  }

  return {
    guestName,
    setGuestName,
    email,
    setEmail,
    status,
    setStatus,
    resetForm,
  };
}