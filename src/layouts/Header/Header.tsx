import "./Header.scss";

import LogoImageSrc from "~/assets/images/logo.svg";

import Logo from "~/components/Logo/Logo";
import Menu from "~/components/Menu/Menu";
import BurgerButton from "~/components/BurgerButton/BurgerButton";

import { useState, useEffect } from "react";
import MenuModal from "~/components/MenuModal/MenuModal";

import { AnimatePresence } from "motion/react";
import clsx from "clsx";
import useMediaQuery from "~/hooks/useMediaQuery";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChanged, setIsChanged] = useState<boolean>(() => window.scrollY > 0);
  const isTablet = useMediaQuery("tablet");

  useEffect(() => {
    const handleScroll = () => {
      setIsChanged(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx("header", { "header--changed": isChanged })}>
      <div className="header__inner container">
        <Logo className="header__logo" imageSrc={LogoImageSrc} />
        {isTablet ? (
          <BurgerButton openModal={() => setIsOpen(true)} />
        ) : (
          <Menu className="header__menu" />
        )}

        <AnimatePresence>
          {isTablet && isOpen && (
            <MenuModal closeModal={() => setIsOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
