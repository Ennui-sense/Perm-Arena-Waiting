import "./MenuModal.scss";

import { motion } from "motion/react";

import Menu from "../Menu/Menu";

import VkIcon from "~/assets/icons/vk.svg?react";
import TgIcon from "~/assets/icons/tg.svg?react";
import MaxIcon from "~/assets/icons/max.svg?react";
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
          <a href="tel:+70123456789" className="menu-modal__link">
            +7 (012) 345-67-89
          </a>
          <p className="menu-modal__text">г. Пермь, ул. Локомотивная 16</p>
          <div className="menu-modal__socials">
            <a
              href="/"
              className="menu-modal__socials-link"
            >
              <VkIcon />
            </a>
            <a
              href="/"
              className="menu-modal__socials-link"
            >
              <TgIcon />
            </a>
            <a
              href="/"
              className="menu-modal__socials-link"
            >
              <MaxIcon />
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
