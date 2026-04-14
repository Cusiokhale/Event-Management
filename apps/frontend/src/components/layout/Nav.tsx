import { NavLink } from "react-router-dom";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

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

        <SignedOut>
          <li>
            <SignInButton mode="modal">
              <button type="button">Sign In</button>
            </SignInButton>
          </li>

          <li>
            <SignUpButton mode="modal">
              <button type="button">Sign Up</button>
            </SignUpButton>
          </li>
        </SignedOut>

        <SignedIn>
          <li>
            <UserButton />
          </li>

          <li>
            <SignOutButton>
              <button type="button">Sign Out</button>
            </SignOutButton>
          </li>
        </SignedIn>
      </ul>
    </nav>
  );
}

export default Nav;