type RsvpFormProps = {
  guestName: string;
  setGuestName: (value: string) => void;

  email: string;
  setEmail: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;

  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function RsvpForm({
  guestName,
  setGuestName,
  email,
  setEmail,
  status,
  setStatus,
  onSubmit,
}: RsvpFormProps) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form_group">
        <label className="form_label" htmlFor="guestName">
          Guest name
        </label>
        <input
          id="guestName"
          className="form_input"
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="e.g., Tehila Akpabio"
        />
      </div>

      <div className="form_group">
        <label className="form_label" htmlFor="guestEmail">
          Guest email
        </label>
        <input
          id="guestEmail"
          className="form_input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g., tehila@example.com"
        />
      </div>

      <div className="form_group">
        <label className="form_label" htmlFor="rsvpStatus">
          RSVP status
        </label>
        <select
          id="rsvpStatus"
          className="form_input"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
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

export default RsvpForm;c