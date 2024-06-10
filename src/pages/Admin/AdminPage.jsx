import { NavLink, Outlet } from "react-router-dom";
import "./AdminPage.css";
import { useState } from "react";

export function AdminPage() {
  const [token, setToken] = useState(sessionStorage.getItem("TOKEN"));

  return (
    <>
      <header className="admin-page-header">
        <h1>Stenart - administrationssida</h1>
      </header>
      <div className="admin-page-wrapper">
        <nav className="admin-page-nav">
          <ul>
            <li>
              <NavLink to={"/"}>Tillbaka till Hemsidan</NavLink>
            </li>
            {token ? (
              <>
                <li>
                  <NavLink to={"/admin"}>Hantera bilder</NavLink>
                </li>
                <li>
                  <NavLink to={"/admin/utstallningar"}>
                    Hantera utställningar
                  </NavLink>
                </li>
                <li>
                  <button
                    className="admin-page-sign-out"
                    onClick={() => {
                      setToken(null);
                      sessionStorage.clear();
                    }}>
                    Logga ut
                  </button>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
        <main className="admin-page-main">
          <Outlet context={[token, setToken]} />
        </main>
      </div>
    </>
  );
}
