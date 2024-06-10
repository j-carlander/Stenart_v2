import { useEffect, useRef, useState } from "react";
import "./HighLightCarousel.css";

export function HighLightCarousel({ highlights }) {
  const [index, setIndex] = useState(0);
  const timerId = useRef();
  const timerMs = 5000;

  useEffect(() => {
    function nextSlide() {
      setIndex((index) => {
        let newIndex = index + 1;
        if (newIndex >= highlights.length) newIndex = 0;
        return newIndex;
      });
    }

    timerId.current = setInterval(nextSlide, timerMs);

    return () => clearInterval(timerId.current);
  }, [highlights]);

  return (
    <article className="highlights-carousel">
      <ul className="slides">
        {highlights.map((highlight, imgIndex) => (
          <li
            className="slide"
            key={highlight.id}
            data-active={imgIndex === index}>
            <img src={`/images/${highlight.id}_w400.webp`} alt="" />
          </li>
        ))}
      </ul>
    </article>
  );
}
