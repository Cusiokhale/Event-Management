import { useEffect } from "react";
import RsvpForm from "../rsvp/RsvpForm";
import { useRsvpFormFields } from "../../hooks/useRsvpFormFields";
import { isRsvpInputValid } from "../../services/rsvpService";
import { useSharedMessage } from "../../hooks/useSharedMessage";
import { useRsvps } from "../../hooks/useRsvps";

function RsvpPage() {
  const { sharedMessage, setSharedMessage } = useSharedMessage();
  const { rsvps, addRsvp, removeRsvp } = useRsvps();

  const {
    guestName,
    setGuestName,
    email,
    setEmail,
    status,
    setStatus,
    resetForm,
  } = useRsvpFormFields();

  useEffect(() => {
    const name = guestName.trim();
    const mail = email.trim();

    if (!name && !mail) return;

    setSharedMessage(
      `Typing RSVP: ${name || "..."} (${status}) — ${mail || "..."}`
    );
  }, [guestName, email, status, setSharedMessage]);

  async function handleAddFromForm() {
    if (!isRsvpInputValid(guestName, email)) {
      setSharedMessage("Please enter a guest name and email before submitting.");
      return;
    }

    const trimmedName = guestName.trim();
    const trimmedEmail = email.trim();

    try {
      await addRsvp(trimmedName, trimmedEmail, status);
      setSharedMessage(`Last RSVP added: ${trimmedName} (${status})`);
      resetForm();
    } catch (error) {
      console.error("Failed to add RSVP:", error);
      setSharedMessage("Failed to add RSVP.");
    }
  }

  async function handleRemoveRsvp(id: number) {
    try {
      await removeRsvp(id);
      setSharedMessage("RSVP removed");
    } catch (error) {
      console.error("Failed to remove RSVP:", error);
      setSharedMessage("Failed to remove RSVP.");
    }
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
                    onClick={() => handleRemoveRsvp(r.id)}
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