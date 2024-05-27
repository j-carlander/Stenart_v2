import { useEffect, useState } from "react";
import "./LandingPage.css";
import { HighLightCarousel } from "../../components/HighlightCarousel/HighLightCarousel";

export function LandingPage() {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch("/api/highlights");
      const json = await res.json();
      setHighlights(json);
    })();
  }, []);

  return (
    <>
      <HighLightCarousel highlights={highlights.length > 0 ? highlights : []} />
    </>
  );
}
