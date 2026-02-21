import { useEffect, useState } from "react";
import RsvpForm from "../rsvp/RsvpForm";
import type { RsvpItem, RsvpStatus } from "../../types/rsvp";

type RsvpPageProps = {
  sharedMessage: string;
  setSharedMessage: (newMessage: string) => void;
};

function RsvpPage({ sharedMessage, setSharedMessage }: RsvpPageProps) {
  // I.2 controlled state
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<RsvpStatus>("Going");

  // I.3 list state
  const [rsvps, setRsvps] = useState<RsvpItem[]>([]);

  // Keep your shared message “live” while typing (I.2 proof)
  useEffect(() => {
    const name = guestName.trim();
    const mail = email.trim();
    if (!name && !mail) return;

    setSharedMessage(`Typing RSVP: ${name || "..."} (${status}) — ${mail || "..."}`);
  }, [guestName, email, status, setSharedMessage]);

  function addRsvp(item: RsvpItem) {
    setRsvps((prev) => [item, ...prev]); // immediate UI update
    setSharedMessage(`Last RSVP added: ${item.guestName} (${item.status})`);
  }

  function removeRsvp(id: string) {
    setRsvps((prev) => prev.filter((r) => r.id !== id)); // immediate UI update
    setSharedMessage("RSVP removed");
  }

  return (
    <div className="page">
      <div className="page__container">
        <h2 className="page__title">RSVP Page</h2>

        <p className="page__shared">
          <strong>Shared:</strong> <span className="muted">{sharedMessage}</span>
        </p>

        <RsvpForm
          guestName={guestName}
          setGuestName={setGuestName}
          email={email}
          setEmail={setEmail}
          status={status}
          setStatus={setStatus}
          onAdd={addRsvp}
        />

        <section className="card">
          <h3 className="card__title">RSVP List</h3>

          {rsvps.length === 0 ? (
            <p className="muted">No RSVPs yet. Submit the form to add one.</p>
          ) : (
            <ul className="list">
              {rsvps.map((r) => (
                <li key={r.id} className="list__item">
                  <div className="list__text">
                    <strong>{r.guestName}</strong> — {r.status}
                    <div className="muted">{r.email}</div>
                  </div>

                  <button
                    type="button"
                    className="btn btn--danger"
                    onClick={() => removeRsvp(r.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

export default RsvpPage;