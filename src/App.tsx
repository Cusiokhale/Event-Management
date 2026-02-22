import { Routes, Route } from "react-router-dom";
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
        <Route path="services" element={<ServicesPage />} />
        <Route path="rsvp" element={<RsvpPage />} />
      </Route>
    </Routes>
  );
}

export default App;