import { NavLink } from "react-router-dom";
import "./Nav.css";

export function Nav() {
  return (
    <nav className="page-nav">
      <input type="checkbox" id="navbar-active" />
      <label htmlFor="navbar-active" className="open-navbar-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#5f6368">
          <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
        </svg>
      </label>
      <label htmlFor="navbar-active" className="navbar-overlay"></label>
      <div className="navlinks-container">
        <label htmlFor="navbar-active" className="close-navbar-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368">
            <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
          </svg>
        </label>
        <NavLink to="/" className="home-link">
          Hem
        </NavLink>
        <NavLink to="/om-mig">Om</NavLink>
        <NavLink to="/">Utställningar</NavLink>
        <NavLink to="/galleri">Galleri</NavLink>
      </div>
    </nav>
  );
}
