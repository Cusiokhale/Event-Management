type ServicesPageProps = {
  sharedMessage: string;
  setSharedMessage: (newMessage: string) => void;
};

function ServicesPage({ sharedMessage, setSharedMessage }: ServicesPageProps) {
  return (
    <>
      <h2>Services Page</h2>
      <p>Shared message: {sharedMessage}</p>

      <button
        type="button"
        onClick={() => setSharedMessage("Updated from Services page")}
      >
        Update shared message
      </button>
    </>
  );
}

export default ServicesPage;