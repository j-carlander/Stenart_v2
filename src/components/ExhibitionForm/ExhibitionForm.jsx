import { useState } from "react";
import "./ExhibitionForm.css";
import fetchService from "../../services/fetchService";

export function ExhibitionForm({ dialogRef, exhibition = defaultExhibit }) {
  const [exhibit, setExhibit] = useState(exhibition);

  function handleChange(e) {
    setExhibit((exhibit) => ({ ...exhibit, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Utställning: ", exhibit);
    await postExhibit();
    setTimeout(() => {
      closeDialog();
    }, 2000);
  }

  function closeDialog() {
    dialogRef.current.close();
    setExhibit(defaultExhibit);
  }

  async function postExhibit() {
    const response = await fetchService.postExhibit(exhibit);

    console.log("response: ", response);
  }

  return (
    <form onSubmit={handleSubmit} className="exhibit-form" method="modal">
      <button
        className="exhibit-form-close-btn"
        type="reset"
        onClick={closeDialog}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#5f6368">
          <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
        </svg>
      </button>
      <label htmlFor="title" className="exhibit-form-label">
        Utställning*:{" "}
        <input
          id="title"
          type="text"
          name="title"
          value={exhibit.title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="location" className="exhibit-form-label">
        Plats*:{" "}
        <input
          id="location"
          type="text"
          name="location"
          value={exhibit.location}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="fromdate" className="exhibit-form-label">
        Från*:{" "}
        <input
          id="fromdate"
          type="date"
          name="fromdate"
          value={exhibit.fromdate}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="todate" className="exhibit-form-label">
        Till:{" "}
        <input
          id="todate"
          type="date"
          name="todate"
          value={exhibit.todate}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description" className="exhibit-form-label">
        Beskrivning*:{" "}
        <textarea
          name="description"
          id="description"
          rows={5}
          value={exhibit.description}
          onChange={handleChange}></textarea>
      </label>
      <label htmlFor="link" className="exhibit-form-label">
        Länk:{" "}
        <input
          id="link"
          type="text"
          name="link"
          value={exhibit.link}
          onChange={handleChange}
        />
      </label>
      <button className="exhibit-form-button save-button">Spara</button>
      <button
        className="exhibit-form-button reset-btn"
        type="reset"
        onClick={closeDialog}>
        Avbryt
      </button>
    </form>
  );
}

const defaultExhibit = {
  title: "",
  location: "",
  fromdate: "",
  todate: "",
  description: "",
  link: "",
};
