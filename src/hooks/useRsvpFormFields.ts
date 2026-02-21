import { useState } from "react";
import type { RsvpStatus } from "../types/rsvp";

/**
 * useRsvpFormFields
 * 
 * This hook holds local form state for RSVP form inputs:
 * - guestName (string)
 * - email (string)
 * - status ("Going" | "Maybe" | "Not going")
 * 
 * It returns:
 * - values: guestName, email, status
 * - setters: setGuestName, setEmail, setStatus
 * - resetForm(): resets all values to default
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