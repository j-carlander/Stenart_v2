import { useEffect, useRef, useState } from "react";
import { ExhibitionForm } from "../ExhibitionForm/ExhibitionForm";
import { ExhibitionCard } from "../ExhibitionCard/ExhibitionCard";
import fetchService from "../../services/fetchService";
import { Navigate, useOutletContext } from "react-router-dom";
import "./AdminExhibitions.css";

export function AdminExhibitions() {
  const dialogRef = useRef();

  const [exhibitions, setExhibitions] = useState([]);
  const [editExhibit, setEditExhibit] = useState(undefined);

  const [token] = useOutletContext();

  useEffect(() => {
    (async function () {
      if (token) {
        const result = await fetchService.getExhibitions();
        setExhibitions(result);
      }
    })();
  }, []);

  function handleEdit(exhibit) {
    setEditExhibit(exhibit);
    console.log("edit exhibit: ", editExhibit);
    dialogRef.current.showModal();
  }

  if (!token) return <Navigate to={"/admin/login"} />;
  return (
    <article className="admin-exhibition-wrapper">
      <h2>Hantera Utställningar</h2>
      <button
        className="admin-exhibition-new-btn"
        onClick={() => dialogRef.current.showModal()}>
        Ny
      </button>
      <dialog ref={dialogRef} className="exhibition-form-modal">
        <ExhibitionForm dialogRef={dialogRef} exhibition={editExhibit} />
      </dialog>
      {exhibitions.map((exhibit) => (
        <div key={exhibit.id} className="admin-exhibit-card">
          <div className="admin-exhibit-card-buttons">
            <button
              className="admin-exhibit-edit"
              onClick={() => handleEdit(exhibit)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed">
                <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
              </svg>
            </button>
            <button className="admin-exhibit-delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </button>
          </div>
          <ExhibitionCard exhibition={exhibit} />
        </div>
      ))}
    </article>
  );
}
