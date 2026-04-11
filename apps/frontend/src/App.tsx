import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
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

        {/* 🔒 PROTECTED ROUTE */}
        <Route
          path="services"
          element={
            <>
              <SignedIn>
                <ServicesPage />
              </SignedIn>

              <SignedOut>
                <SignIn />
              </SignedOut>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;