import "./Readiness.scss";

import { useEffect, useRef } from "react";

import Section from "~/layouts/Section/Section";

import VisualizationIcon from "~/assets/icons/visualization.svg?react";

const READINESS_PERCENT = 67;

const clampPercent = (value: number) => Math.min(Math.max(value, 0), 100);

const Readiness = () => {
  const visualizationRef = useRef<HTMLDivElement>(null);
  const readinessPercent = clampPercent(READINESS_PERCENT);

  useEffect(() => {
    const visibleFigures =
      visualizationRef.current?.querySelectorAll<SVGPathElement>(
        "svg > path[stroke]",
      );

    if (!visibleFigures?.length) {
      return;
    }

    const filledFiguresCount = Math.round(
      (visibleFigures.length * readinessPercent) / 100,
    );

    visibleFigures.forEach((figure, index) => {
      figure.style.fill = index < filledFiguresCount ? "#fff" : "transparent";
    });
  }, [readinessPercent]);

  return (
    <Section
      sectionName="readiness"
      title={
        <>
          Готовность
          <br />
          проекта{" "}
        </>
      }
    >
      <div className="readiness__inner">
        <div className="readiness__visualization" ref={visualizationRef}>
          <p className="readiness__visualization-value">{readinessPercent} %</p>
          <VisualizationIcon
            className="readiness__visualization-icon"
            aria-hidden="true"
          />
        </div>

        <div className="readiness__text">
          Следите за тем, как главная стройка Прикамья бретает реальные черты.
          Наглядный прогресс и отчет о выполненных этапах — от фундамента до
          монтажа уникальных конструкций Следите за тем, как главная стройка
          Прикамья обретает реальные черты. Наглядный прогресс и отчет о
          выполненных этапах — от фундамента до монтажа уникальных конструкций
          Следите за тем, как главная стройка Прикамья обретает реальные черты.
          Наглядный прогресс и отчет о выполненных этапах — от фундамента до
          монтажа уникальных конструкций
        </div>
      </div>
    </Section>
  );
};

export default Readiness;
