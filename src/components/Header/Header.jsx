import { useNavigate } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";
import { useEffect, useState } from "react";

export function Header() {
  const [pageScrolled, setPageScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    function handleYOffset() {
      if (window.matchMedia("(max-width: 700px)").matches) {
        if (window.scrollY > 180 && pageScrolled === false) {
          setPageScrolled((scrolled) => !scrolled);
        } else if (window.scrollY < 100 && pageScrolled === true) {
          setPageScrolled((scrolled) => !scrolled);
        }
      }
    }
    window.addEventListener("scroll", handleYOffset);
    return () => window.removeEventListener("scroll", handleYOffset);
  }, [pageScrolled]);

  return (
    <header className="page-header">
      <div
        className={pageScrolled ? "header-wrapper compact " : "header-wrapper"}>
        <h1 className="page-title" onClick={() => navigate("/")}>
          Stenart <span className="page-subtitle">S.C.Flummer</span>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
