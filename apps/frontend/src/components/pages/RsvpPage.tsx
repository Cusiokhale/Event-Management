import { useEffect, useState } from "react";
import RsvpForm from "../rsvp/RsvpForm";
import type { RsvpItem } from "../../types/rsvp";
import { useRsvpFormFields } from "../../hooks/useRsvpFormFields";
import { isRsvpInputValid } from "../services/rsvpService";
import { useSharedMessage } from "../../hooks/useSharedMessage";
import { rsvpRepository } from "../../repositories/rsvpRepository";

function RsvpPage() {
  const { sharedMessage, setSharedMessage } = useSharedMessage();

  const {
    guestName,
    setGuestName,
    email,
    setEmail,
    status,
    setStatus,
    resetForm,
  } = useRsvpFormFields();

  // Initialize list from repository test data
  const [rsvps, setRsvps] = useState<RsvpItem[]>(() => rsvpRepository.getAll());

  useEffect(() => {
    const name = guestName.trim();
    const mail = email.trim();
    if (!name && !mail) return;

    setSharedMessage(`Typing RSVP: ${name || "..."} (${status}) — ${mail || "..."}`);
  }, [guestName, email, status, setSharedMessage]);

  function handleAddFromForm() {
    // validate first
    if (!isRsvpInputValid(guestName, email)) {
      setSharedMessage("Please enter a guest name and email before submitting.");
      return;
    }

    const trimmedName = guestName.trim();
    const trimmedEmail = email.trim();

    // action after validation: CREATE via repository
    const newRsvp = rsvpRepository.create(trimmedName, trimmedEmail, status);

    // refresh UI from repository
    setRsvps(rsvpRepository.getAll());
    setSharedMessage(`Last RSVP added: ${newRsvp.guestName} (${newRsvp.status})`);

    resetForm();
  }

  function removeRsvp(id: string) {
    // DELETE via repository
    rsvpRepository.delete(id);

    // refresh UI from repository
    setRsvps(rsvpRepository.getAll());
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
          resetForm={resetForm}
          onAdd={handleAddFromForm}
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