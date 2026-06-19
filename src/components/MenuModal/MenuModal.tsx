import "./MenuModal.scss";

import { motion } from "motion/react";

import Menu from "../Menu/Menu";

import VkIcon from "~/assets/icons/vk.svg?react";
import TgIcon from "~/assets/icons/tg.svg?react";
import CrossIcon from "~/assets/icons/cross.svg?react";

interface IMenuModal {
  closeModal: () => void;
}

const MenuModal = ({ closeModal }: IMenuModal) => {
  return (
    <motion.div
      className="menu-modal"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="menu-modal__inner">
        <Menu />

        <div className="menu-modal__contacts">
          <a href="tel:+73422233313" className="menu-modal__link">
            +7 (342) 223-33-13
          </a>
          <p className="menu-modal__text">г. Пермь, ул. Белинского, 6Б</p>
          <p className="menu-modal__text">12:00 - 00:00</p>
          <div className="menu-modal__socials">
            <a
              href="https://vk.com/kinkaliperm"
              className="menu-modal__socials-link"
            >
              <VkIcon />
            </a>
          </div>
        </div>
      </div>

      <button type="button" className="menu-modal__button" onClick={closeModal}>
        <CrossIcon />
      </button>
    </motion.div>
  );
};

export default MenuModal;
