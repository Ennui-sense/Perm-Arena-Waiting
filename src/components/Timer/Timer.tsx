import "./Timer.scss";

import { useState, useEffect } from "react";

import TimerCard from "../TimerCard/TimerCard";
import clsx from "clsx";

interface ITimerCard {
  className?: string;
}

const Timer = ({ className }: ITimerCard) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const targetDate = new Date(2027, 12, 1, 0, 0, 0, 0);

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

  const difference = targetDate.getTime() - currentDate.getTime();

  const days = formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hours = formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24));
  const minutes = formatNumber(Math.floor((difference / (1000 * 60)) % 60));
  const seconds = formatNumber(Math.floor((difference / 1000) % 60));

  const result = [...days, ":", ...hours, ":", ...minutes, ":", ...seconds];

  return (
    <div className={clsx("hero-timer", className)}>
      <p className="hero-timer__title">До предполагаемого открытия осталось:</p>

      <div className="hero-timer__body">
        {result.map((value, index) => (
          <TimerCard value={value} key={value + index} />
        ))}
      </div>

      <svg className="hero-timer__svg-filter" aria-hidden="true">
        <filter id="glass-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="80"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
};

export default Timer;
