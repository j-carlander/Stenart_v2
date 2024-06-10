import "./Image.css";

export function Image({ image }) {
  return (
    <div
      className="main-gallery-img"
      style={{ backgroundImage: `url(/images/${image.id}_w30.webp)` }}>
      <img src={`/images/${image.id}_w400.webp`} alt={image.alt} />
    </div>
  );
}
