import { useEffect, useState } from "react";
import RsvpForm from "../rsvp/RsvpForm";

type RsvpPageProps = {
  sharedMessage: string;
  setSharedMessage: (newMessage: string) => void;
};

export default function RsvpPage({
  sharedMessage,
  setSharedMessage,
}: RsvpPageProps) {
  // Parent owns form state (I.2 requirement)
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Going");

  // Real-time update (I.2 proof)
  useEffect(() => {
    const name = guestName.trim();
    const mail = email.trim();

    // If nothing typed yet, don't spam shared message
    if (!name && !mail) return;

    setSharedMessage(`Typing RSVP: ${name || "..."} (${status}) — ${mail || "..."}`);
  }, [guestName, email, status, setSharedMessage]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!guestName.trim() || !email.trim()) {
      setSharedMessage("Please enter guest name and email.");
      return;
    }

    setSharedMessage(`RSVP submitted: ${guestName.trim()} (${status})`);
    setGuestName("");
    setEmail("");
    setStatus("Going");
  }

  return (
    <div className="page">
      <h2 className="pageTitle">RSVP Page</h2>

      {sharedMessage ? (
        <p className="sharedMessage">
          <strong>Shared:</strong> {sharedMessage}
        </p>
      ) : null}

      <section className="card">
        <RsvpForm
          guestName={guestName}
          setGuestName={setGuestName}
          email={email}
          setEmail={setEmail}
          status={status}
          setStatus={setStatus}
          onSubmit={handleSubmit}
        />
      </section>
    </div>
  );
}