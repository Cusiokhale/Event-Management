import React, { useState } from "react";
import type { RsvpItem } from "../types/rsvp";

type EventOption = { id: string; title: string };

type Props = {
  events: EventOption[];
  onAdd: (item: RsvpItem) => void;
};

export default function RsvpForm({ events, onAdd }: Props) {
  const [eventId, setEventId] = useState(events[0]?.id ?? "");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [status, setStatus] = useState<RsvpItem["status"]>("Going");
  const [error, setError] = useState<string | null>(null);

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!eventId) return setError("Please select an event.");
    if (!guestName.trim()) return setError("Guest name is required.");
    if (!guestEmail.trim()) return setError("Email is required.");
    if (!isEmailValid(guestEmail))
      return setError("Please enter a valid email.");
    // if (attendees < 1 || attendees > 10) return setError("Attendees must be 1 to 10.");

    const selected = events.find((ev) => ev.id === eventId);
    const eventTitle = selected ? selected.title : "Unknown event";

    const item: RsvpItem = {
      id: crypto.randomUUID(),
      eventId,
      eventTitle,
      guestName: guestName.trim(),
      guestEmail: guestEmail.trim().toLowerCase(),
      status,
      createdAt: new Date().toISOString(),
    };

    onAdd(item);

    setGuestName("");
    setGuestEmail("");
    setAttendees(attendees + 1);
    setStatus("Going");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}
    >
      <h2 style={{ marginTop: 0 }}>RSVP Signup</h2>

      {error && (
        <p style={{ marginTop: 0 }}>
          <strong>{error}</strong>
        </p>
      )}

      <div style={{ marginBottom: 12 }}>
        <label>
          Select Event
          <select
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: 8,
              marginTop: 6,
            }}
          >
            {events.length === 0 && (
              <option value="">No events available</option>
            )}
            {events.map((ev) => (
              <option key={ev.id} value={ev.id}>
                {ev.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          Guest Name
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="e.g., Emmanuel"
            style={{
              display: "block",
              width: "100%",
              padding: 8,
              marginTop: 6,
            }}
          />
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          Guest Email
          <input
            type="email"
            value={guestEmail}
            onChange={(e) => setGuestEmail(e.target.value)}
            placeholder="e.g., emmanuel@email.com"
            style={{
              display: "block",
              width: "100%",
              padding: 8,
              marginTop: 6,
            }}
          />
        </label>
      </div>

      {/* <div style={{ marginBottom: 12 }}>
        <label>
          Number of Attendees
          <input
            type="number"
            min={1}
            max={10}
            value={attendees}
            onChange={(e) => setAttendees(Number(e.target.value))}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>
      </div> */}

      <div style={{ marginBottom: 12 }}>
        <label>
          RSVP Status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as RsvpItem["status"])}
            style={{
              display: "block",
              width: "100%",
              padding: 8,
              marginTop: 6,
            }}
          >
            <option value="Going">Going</option>
            <option value="Maybe">Maybe</option>
            <option value="Not going">Not going</option>
          </select>
        </label>
      </div>

      <button type="submit" style={{ padding: "10px 14px" }}>
        Submit RSVP
      </button>
    </form>
  );
}
