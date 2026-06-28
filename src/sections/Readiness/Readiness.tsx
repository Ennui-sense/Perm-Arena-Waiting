import "./Readiness.scss";

import { useEffect, useState } from "react";

import Section from "~/layouts/Section/Section";

import VisualizationIcon from "~/assets/icons/visualization.svg?react";
import { useInView } from "react-intersection-observer";

const READINESS_PERCENT = 32;

const clampPercent = (value: number) => Math.min(Math.max(value, 0), 100);

const Readiness = () => {
  const readinessPercent = clampPercent(READINESS_PERCENT);
  const [currentPercent, setCurrentPercent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) {
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentPercent((currentValue) => {
        if (currentValue >= readinessPercent) {
          clearInterval(intervalId);
          return readinessPercent;
        }

        return currentValue + 1;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, [inView, readinessPercent]);

  return (
    <Section
      sectionName="readiness"
      title="Ход строительства"
      subtitle="Готовность проекта"
      rightContent={`${currentPercent}%`}
    >
      <div className="readiness__inner" ref={ref}>
        <div className="readiness__visualization">
          <VisualizationIcon className="readiness__visualization-icon readiness__visualization-icon--outline" />
          <div
            className="readiness__visualization-fill"
            style={{ height: `${currentPercent}%` }}
          >
            <VisualizationIcon className="readiness__visualization-icon readiness__visualization-icon--fill" />
          </div>
        </div>
        <div className="readiness__body">
          <div className="readiness__info">
            <h3 className="readiness__info-title">Что делаем</h3>
            <p className="readiness___info-text">
              Уже начали строительство покрытия — идет укладка профилированного
              листа и мягкой кровли. В работе — новые участки обходной галереи,
              внутри здания подрядчики выполняют работы по устройству сетей
              отопления, электро- и водоснабжения, а в цокольном техническом
              этаже уже начали первые помещения готовить к отделке
            </p>
          </div>
          <div className="readiness__info">
            <h3 className="readiness__info-title">Что сделали</h3>
            <p className="readiness___info-text">
              Завершается установка металлоконструкций кровли: на сегодня
              осталось поставить всего шесть ферм из 31 на кровле основной
              арены, и скоро приступим к сборке кровли тренировочной арены (там
              16 ферм). Все конструкции будут смонтированы до конца августа, а
              параллельно с этим специалисты проведут монтаж кровли.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Readiness;
