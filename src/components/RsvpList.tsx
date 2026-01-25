import type { RsvpItem } from "../types/rsvp";

type Props = {
  items: RsvpItem[];
  onRemove: (id: string) => void;
};

export default function RsvpList({ items, onRemove }: Props) {
  if (items.length === 0) return <p>No RSVPs yet. Use the form above.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((r) => (
        <li key={r.id} style={{ border: "1px solid #ddd", padding: 16, 
        borderRadius: 8, marginBottom: 12 }}>
          <h3 style={{ marginTop: 0, marginBottom: 6 }}>{r.guestName}</h3>
          <p style={{ margin: 0 }}><strong>Event:</strong> {r.eventTitle}</p>
          <p style={{ margin: 0 }}><strong>Email:</strong> {r.guestEmail}</p>
          <p style={{ margin: 0 }}><strong>Attendees:</strong> {r.attendees}</p>
          <p style={{ margin: 0 }}><strong>Status:</strong> {r.status}</p>

          <button onClick={() => onRemove(r.id)} style={{ marginTop: 10, padding: "8px 12px" }}>
            Remove RSVP
          </button>
        </li>
      ))}
    </ul>
  );
}
