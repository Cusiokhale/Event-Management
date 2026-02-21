import { useSharedMessage } from "../../contexts/sharedMessageContext";

function EventsPage() {
  const { sharedMessage, setSharedMessage } = useSharedMessage();

  return (
    <>
      <h2>Events Page</h2>
      <p>Shared message: {sharedMessage}</p>

      <button
        type="button"
        onClick={() => setSharedMessage("Updated from Events page")}
      >
        Update shared message
      </button>
    </>
  );
}

export default EventsPage;