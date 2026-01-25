type EventsPageProps = {
  sharedMessage: string;
  setSharedMessage: (newMessage: string) => void;
};

function EventsPage({ sharedMessage, setSharedMessage }: EventsPageProps) {
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