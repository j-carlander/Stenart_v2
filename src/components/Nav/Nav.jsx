import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="page-nav-wrapper">
      <button
        className={open ? "page-nav-toggle open" : "page-nav-toggle"}
        onClick={() => setOpen(!open)}>
        Nav
      </button>
      {open ? (
        <nav className="page-nav">
          <NavLink to="/om-mig">Om mig</NavLink>
        </nav>
      ) : null}
    </div>
  );
}
