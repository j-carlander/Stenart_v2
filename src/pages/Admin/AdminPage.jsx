import { NavLink, Outlet } from "react-router-dom";
import "./AdminPage.css";

export function AdminPage() {
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
            <li>
              <NavLink to={"/admin"}>Hantera bilder</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/utstallningar"}>
                Hantera utställningar
              </NavLink>
            </li>
          </ul>
        </nav>
        <main className="admin-page-main">
          <Outlet />
        </main>
      </div>
    </>
  );
}
