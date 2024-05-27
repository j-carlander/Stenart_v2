import { useEffect, useState } from "react";
import { Image } from "../Image/Image";
import "./Gallery.css";

export function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch("/api/gallery");
      const json = await res.json();
      console.log("img json: ", json);
      setImages(json);
    })();
  }, []);

  return (
    <>
      <h2 className="main-gallery-heading">Galleri</h2>
      <article className="main-gallery-wrapper">
        {images.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </article>
    </>
  );
}
