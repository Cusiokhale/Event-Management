import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<p>Turning Moments into Memories!</p>}
        />

        <Route
          path="events"
          element={
            <>
              <h2>Events Page</h2>
              <p>Our event planning services will be listed here.</p>
            </>
          }
        />

        <Route
          path="services"
          element={
            <>
              <h2>Services Page</h2>
              <p>Our services will be listed here.</p>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
