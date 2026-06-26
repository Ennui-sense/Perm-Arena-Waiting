import "./Timer.scss";

import { Fragment, useState, useEffect } from "react";

import TimerCard from "../TimerCard/TimerCard";
import clsx from "clsx";

interface ITimer {
  className?: string;
}

const Timer = ({ className }: ITimer) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const targetDate = new Date(2027, 5, 30, 0, 0, 0, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number: number) => {
    if (number < 10) {
      return ("0" + number).split("");
    }

    return String(number).split("");
  };

  const difference = Math.max(targetDate.getTime() - currentDate.getTime(), 0);

  const result = [
    {
      label: "дней",
      value: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
    },
    {
      label: "часов",
      value: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
    },
    {
      label: "минут",
      value: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
    },
    {
      label: "секунд",
      value: formatNumber(Math.floor((difference / 1000) % 60)),
    },
  ];

  return (
    <div className={clsx("timer", className)}>
      <p className="timer__title">До предполагаемого открытия осталось:</p>

      <div className="timer__body">
        {result.map(({ label, value }, groupIndex) => (
          <Fragment key={label}>
            <div className="timer__unit">
              <div className="timer__cards">
                {value.map((digit, index) => (
                  <TimerCard value={digit} key={`${label}-${index}`} />
                ))}
              </div>

              <p className="timer__label">{label}</p>
            </div>

            {groupIndex < result.length - 1 && (
              <div className="timer__separator">
                <TimerCard value=":" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timer;
