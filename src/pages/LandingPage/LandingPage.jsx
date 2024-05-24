import { useEffect, useState } from "react";
import "./LandingPage.css";
import { Image } from "../../components/Image/Image";

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
    <article className="main-gallery-wrapper">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </article>
  );
}
