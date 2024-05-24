import { Image } from "../Image/Image";
import "./Gallery.css";

export function Gallery({ images }) {
  return (
    <article className="main-gallery-wrapper">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </article>
  );
}
