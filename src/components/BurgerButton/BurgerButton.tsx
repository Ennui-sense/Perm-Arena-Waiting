import "./BurgerButton.scss";

// import BurgerButtonIcon from "~/assets/icons/burger.svg?react";

interface IBurgerButton {
  openModal?: () => void;
}

const BurgerButton = ({ openModal }: IBurgerButton) => {
  return (
    <button className="burger-button" type="button" onClick={openModal}>
      <BurgerButtonIcon />

      <span className="visually-hidden">Открыть меню</span>
    </button>
  )
}

export default BurgerButton
