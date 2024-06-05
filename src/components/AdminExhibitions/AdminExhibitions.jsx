import { useEffect, useRef, useState } from "react";
import { ExhibitionForm } from "../ExhibitionForm/ExhibitionForm";
import { ExhibitionCard } from "../ExhibitionCard/ExhibitionCard";
import fetchService from "../../services/fetchService";

export function AdminExhibitions() {
  const dialogRef = useRef();

  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    (async function () {
      const result = await fetchService.getExhibitions();
      setExhibitions(result);
    })();
  }, []);
  return (
    <article>
      <h2>Hantera Utställningar</h2>
      <button onClick={() => dialogRef.current.showModal()}>Ny</button>
      <dialog ref={dialogRef}>
        <ExhibitionForm dialogRef={dialogRef} />
      </dialog>
      {exhibitions.map((exhibit) => (
        <ExhibitionCard exhibition={exhibit} key={exhibit.id} />
      ))}
    </article>
  );
}
