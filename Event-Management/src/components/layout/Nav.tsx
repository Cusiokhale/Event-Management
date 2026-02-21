import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/events">Events</NavLink>
        </li>

        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/rsvp">RSVP</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
