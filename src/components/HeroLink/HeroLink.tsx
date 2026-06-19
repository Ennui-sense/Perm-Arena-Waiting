import "./HeroLink.scss";

import ArrowIcon from "~/assets/icons/arrow.svg?react";
import Button from "../Button/Button";

import useMediaQuery from "~/hooks/useMediaQuery";

const HeroLink = () => {
  const isMobile = useMediaQuery("mobile");

  return (
    <a href="/" className="hero-link">
      <Button className="hero-link__button" variant="transparent">
        Что на столе
      </Button>

      {isMobile && (
        <Button className="hero-link__button" variant="transparent">
          Забронировать
        </Button>
      )}

      <ArrowIcon />
    </a>
  );
};

export default HeroLink;
