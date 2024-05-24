import "./Image.css";

export function Image({ image }) {
  return (
    <div className="main-gallery-img">
      <img src={`/images/${image.id}.png`} alt={image.alt} />
    </div>
  );
}
