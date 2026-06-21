import "./Hero.scss";

import videoSrc from "/hero-bg.mp4";

import Button from "~/components/Button/Button";
import HeroTimer from "~/components/Timer/Timer";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <p className="hero__subtitle">Сердце будущих событий</p>
        <h1 className="hero__title">
          Арена нового
          <br />
          времени в Перми
        </h1>

        <Button className="hero__button">Узнать первым</Button>

        <HeroTimer className="hero__timer" />

      </div>

      <div className="hero__bg">
        <video
          className="hero__bg-video"
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
