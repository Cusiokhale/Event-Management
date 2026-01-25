import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import EventsPage from "./components/pages/EventsPage";
import ServicesPage from "./components/pages/ServicesPage";

function App() {
  const [sharedMessage, setSharedMessage] = useState("Hello from shared state");

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Shared message: {sharedMessage}</p>} />

        <Route
          path="events"
          element={
            <EventsPage
              sharedMessage={sharedMessage}
              setSharedMessage={setSharedMessage}
            />
          }
        />

        <Route
          path="services"
          element={
            <ServicesPage
              sharedMessage={sharedMessage}
              setSharedMessage={setSharedMessage}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
