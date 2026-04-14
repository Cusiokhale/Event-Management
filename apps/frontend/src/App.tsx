import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import "./App.css";
import Layout from "./components/layout/Layout";
import EventsPage from "./components/pages/EventsPage";
import ServicesPage from "./components/pages/ServicesPage";
import RsvpPage from "./components/pages/RsvpPage";
import { useSharedMessage } from "./hooks/useSharedMessage";

function App() {
  const { sharedMessage } = useSharedMessage();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Shared message: {sharedMessage}</p>} />
        <Route path="events" element={<EventsPage />} />
        <Route path="rsvp" element={<RsvpPage />} />

        <Route
          path="services"
          element={
            <>
              <SignedIn>
                <ServicesPage />
              </SignedIn>

              <SignedOut>
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  <h2>Please sign in to view your services</h2>
                  <p>You need an account to access this page.</p>
                </div>
              </SignedOut>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;