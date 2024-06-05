import { useNavigate } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="page-header">
      <div className="header-wrapper">
        <h1 className="page-title" onClick={() => navigate("/")}>
          Stenart <span className="page-subtitle">S.C.Flummer</span>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
