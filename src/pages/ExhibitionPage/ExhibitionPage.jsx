import { useEffect, useState } from "react";
import { ExhibitionCard } from "../../components/ExhibitionCard/ExhibitionCard";
import "./ExhibitionPage.css";
import fetchService from "../../services/fetchService";

export function ExhibitionPage() {
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    (async function () {
      const result = await fetchService.getExhibitions();
      setExhibitions(result);
    })();
  }, []);
  return (
    <div className="exhibition-page-wrapper">
      <div className="img-container">
        <img src="/images/1.png" alt="" />
      </div>
      <article className="exhibitions">
        <h2>Utställningar</h2>
        {exhibitions.map((exhibit) => (
          <ExhibitionCard exhibition={exhibit} key={exhibit.id} />
        ))}
      </article>
    </div>
  );
}
