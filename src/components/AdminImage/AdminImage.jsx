import { useState } from "react";
import "./AdminImage.css";
import fetchService from "../../services/fetchService";

export function AdminImage() {
  const [image, setImage] = useState({
    alt: "",
    highlight: false,
    base64Img: null,
  });
  function handleFiles(e) {
    const file = e.target.files[0];
    if (!file) return;
    const fileReader = new FileReader();

    fileReader.onloadend = (event) => {
      const base64 = event.target.result;
      setImage((image) => ({ ...image, base64Img: base64 }));
    };

    fileReader.readAsDataURL(file);
  }
  async function uploadImage(e) {
    e.preventDefault();

    const response = await fetchService.postImage(image);

    console.log("response: ", await response.json());
  }

  return (
    <form className="admin-img-form" onSubmit={(e) => e.preventDefault()}>
      <h3>Ladda upp ny bild</h3>
      <label htmlFor="imgAlt" className="img-form-label">
        Bildnamn:{" "}
        <input
          placeholder="Namn på bild"
          type="text"
          id="imgAlt"
          value={image.alt}
          onChange={(e) =>
            setImage((image) => ({ ...image, alt: e.target.value }))
          }
        />
      </label>
      <label htmlFor="imgHighlight" className="img-form-label">
        Lyft fram på förstasidan:{" "}
        <input
          type="checkbox"
          id="imgHighlight"
          value={image.highlight}
          onChange={(e) =>
            setImage((image) => ({ ...image, highlight: e.target.checked }))
          }
        />
      </label>
      <div className="img-file-container">
        <label htmlFor="imgFile" className="img-file-select">
          Välj bild
        </label>
        <input
          id="imgFile"
          type="file"
          hidden
          required
          onChange={handleFiles}
        />
      </div>
      {image.base64Img ? (
        <>
          <div className="img-preview-controls">
            <p>Vald bild:</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setImage((image) => ({ ...image, base64Img: null }));
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368">
                <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
              </svg>{" "}
              Ta bort bild
            </button>
          </div>
          <img src={image.base64Img} className="preview-img" />
        </>
      ) : (
        <p>Ingen bild är vald!</p>
      )}

      <button onClick={uploadImage}>Ladda upp bild</button>
    </form>
  );
}
