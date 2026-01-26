type RsvpPageProps = {
  sharedMessage: string;
  setSharedMessage: (newMessage: string) => void;
};

function RsvpPage({ sharedMessage, setSharedMessage }: RsvpPageProps) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
      <h2 style={{ textAlign: "center", marginBottom: 8 }}>RSVP Page</h2>

      <p style={{ textAlign: "center", marginTop: 0 }}>
        <strong>Shared:</strong> {sharedMessage}
      </p>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 10,
          padding: 16,
          marginTop: 16,
          background: "#fff",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Feature Page (I.1)</h3>

        <p style={{ marginBottom: 12 }}>
          This page proves routing + shared state props. Click the button to
          update shared state across pages.
        </p>

        <button
          type="button"
          onClick={() => setSharedMessage("Updated from RSVP page")}
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #bbb",
            cursor: "pointer",
          }}
        >
          Update shared message
        </button>
      </div>
    </div>
  );
}

export default RsvpPage;