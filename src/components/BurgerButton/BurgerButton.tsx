import "./BurgerButton.scss";

interface IBurgerButton {
  openModal?: () => void;
}

const BurgerButton = ({ openModal }: IBurgerButton) => {
  return (
    <button className="burger-button" type="button" onClick={openModal}>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>

      <span className="visually-hidden">Открыть меню</span>
    </button>
  )
}

export default BurgerButton
