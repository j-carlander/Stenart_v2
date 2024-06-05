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
      dialogRef.current.close();
    }, 2000);
  }

  async function postExhibit() {
    const response = await fetchService.postExhibit(exhibit);

    console.log("response: ", response);
  }

  return (
    <form onSubmit={handleSubmit} className="exhibit-form" method="modal">
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
      <button>Spara</button>
      <button type="reset" onClick={() => dialogRef.current.close()}>
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
