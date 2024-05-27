import { useNavigate } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-wrapper">
      <header className="page-header">
        <div className="title-wrapper" onClick={() => navigate("/")}>
          <h1 className="page-title">Stenart</h1>
          <span className="page-subtitle">S.C.Flummer</span>
        </div>
        <Nav />
      </header>
    </div>
  );
}
