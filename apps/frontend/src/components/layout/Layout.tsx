import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Event Management Website</h1>
        <p>Conferences • Weddings • School Events</p>
        <Nav />
      </header>

      <main className="app__main">
        <Outlet />
      </main>

      <footer className="app__footer">
        <p>Team: Ace Stack</p>
        <p>Members: Nkechi Echeta, Cordelia Usiokhale</p>
      </footer>
    </div>
  );
}

export default Layout;
