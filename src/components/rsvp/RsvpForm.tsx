import type { RsvpStatus } from "../../types/rsvp";

type Props = {
  guestName: string;
  setGuestName: (v: string) => void;

  email: string;
  setEmail: (v: string) => void;

  status: RsvpStatus;
  setStatus: (v: RsvpStatus) => void;

  resetForm: () => void;

  onAdd: () => void;
};

export default function RsvpForm({
  guestName,
  setGuestName,
  email,
  setEmail,
  status,
  setStatus,
  resetForm,
  onAdd,
}: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = guestName.trim();
    const mail = email.trim();

    // Basic UI validation (presentation concern)
    if (!name || !mail) return;

    onAdd();
    resetForm();
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h3 className="card__title">RSVP Signup</h3>

      <div className="form__group">
        <label className="form__label">Guest name</label>
        <input
          className="form__input"
          type="text"
          placeholder="e.g., Tehila Akpabio"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
      </div>

      <div className="form__group">
        <label className="form__label">Guest email</label>
        <input
          className="form__input"
          type="email"
          placeholder="e.g., tehila@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form__group">
        <label className="form__label">RSVP status</label>
        <select
          className="form__input"
          value={status}
          onChange={(e) => setStatus(e.target.value as RsvpStatus)}
        >
          <option value="Going">Going</option>
          <option value="Maybe">Maybe</option>
          <option value="Not going">Not going</option>
        </select>
      </div>

      <button className="btn" type="submit">
        Submit RSVP
      </button>
    </form>
  );
}