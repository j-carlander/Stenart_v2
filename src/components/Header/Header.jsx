import { Nav } from "../Nav/Nav";
import "./Header.css";

export function Header() {
  return (
    <header className="page-header">
      <h1 className="page-title">
        Stenart <span className="page-subtitle">S.C.Flummer</span>
      </h1>
      <Nav />
    </header>
  );
}
