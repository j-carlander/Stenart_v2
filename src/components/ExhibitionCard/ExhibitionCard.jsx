export function ExhibitionCard({ exhibition }) {
  return (
    <article>
      <h3>{exhibition.title}</h3>
      <p>{exhibition.location}</p>
      <p>
        <time>
          {Intl.DateTimeFormat("sv-SE", { dateStyle: "short" }).format(
            new Date(exhibition.fromdate)
          )}
        </time>{" "}
        -{" "}
        <time>
          {Intl.DateTimeFormat("sv-SE", { dateStyle: "short" }).format(
            new Date(exhibition.todate)
          )}
        </time>
      </p>
      <a href={exhibition.link} target="_blank" className="link-btn">
        Läs mer
      </a>
    </article>
  );
}
