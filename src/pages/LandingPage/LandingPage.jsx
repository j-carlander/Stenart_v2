import { useEffect, useState } from "react";
import "./LandingPage.css";

import { Gallery } from "../../components/Gallery/Gallery";

export function LandingPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch("/api/gallery");
      const json = await res.json();
      setImages(json);
    })();
  }, []);

  return (
    <>
      <Gallery images={images} />
    </>
  );
}
