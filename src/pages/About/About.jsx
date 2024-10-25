import "./About.css";

export function About() {
  return (
    <div className="page-wrapper">
      <article className="about-page">
        <h2>Om mig</h2>
        <p>
          Jag har i hela mitt liv jobbat med skapande på något sätt. Jag
          utbildade mig till guldsmed och har arbetat över fyrtio år i egen
          guldsmedsateljé i Norrtälje. Numera är det stora stenar som får ge
          uttryck för mina kreativa idéer.
        </p>
        <p>
          Jag har skulpterat i sten sedan 2017. För mig är det en rogivande
          skaparprocess som långsamt tar form. Det är för det mesta stenen som
          avgör vad resultatet ska bli, den inspirerar till något. Former som
          uppstår under arbetets gång kan ändra på allt. Den färdiga skulpturen
          är många gånger inte lik den ursprungliga tanken.
        </p>
        <p>
          Jag måste känna glädjen i arbetet och friheten att göra precis vad som
          faller mig in. Det kan bli flera skulpturer av samma idé, det ena
          föder det andra. Det är också utfordringen och viljan till att kunna
          utföra det jag vill göra rent tekniskt som lockar.
        </p>
        <p>
          Kreativiteten i mitt huvud står nog aldrig still, jag ser former och
          linjer överallt och idéer föds.
        </p>
        <p>Det är det som är min drivkraft!</p>
      </article>
      <div className="about-img">
        <img src="/images/me.png" alt="" />
      </div>
    </div>
  );
}
