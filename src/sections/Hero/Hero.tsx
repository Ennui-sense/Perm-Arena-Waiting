import "./Hero.scss";

import imageSrc from "~/assets/images/hero-bg.png";
import videoSrc from "/hero-bg.mp4";

import Button from "~/components/Button/Button";
import HeroTimer from "~/components/Timer/Timer";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <h1 className="hero__title container">Арена нового времени в Перми</h1>
        <p className="hero__subtitle">Сердце будущих событий</p>

        <HeroTimer className="hero__timer"/>

				<Button className="hero__button">Узнать первым</Button>
      </div>

      <div className="hero__bg">
        {/* <video
          className="hero__bg-video"
          width={1920}
          height={1080}
					autoPlay
					loop
					muted
        >
					<source src={videoSrc} type="video/mp4"/>
				</video> */}

        <img
          src={imageSrc}
          alt=""
          width={1800}
          height={1800}
          className="hero__bg-image"
        />
      </div>
    </section>
  );
};

export default Hero;
