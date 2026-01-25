import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <h1>Event Management Website</h1>
            <p>Turning Moments into Memories!</p>
          </main>
        }
      />

      <Route
        path="/events"
        element={
          <main>
            <h2>Events Page</h2>
            <p>Our event planning services will be listed here.</p>
          </main>
        }
      />

      <Route
        path="/services"
        element={
          <main>
            <h2>Services Page</h2>
            <p>Our services will be listed here.</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
