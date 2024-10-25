export function ExhibitionCard({ exhibition }) {
  return (
    <article className="exhibition-card">
      <h3>{exhibition.title}</h3>
      <p>{exhibition.location}</p>
      <p>
        <time>{exhibition.fromdate}</time> - <time>{exhibition.todate}</time>
      </p>
      <a href={exhibition.link} target="_blank" className="link-btn">
        Läs mer
      </a>
    </article>
  );
}
