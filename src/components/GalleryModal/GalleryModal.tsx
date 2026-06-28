import "./GalleryModal.scss";
import "swiper/css";

import Modal from "react-modal";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import CrossIcon from "~/assets/icons/cross.svg?react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import ArrowIcon from "~/assets/icons/arrow-slider.svg?react";

interface IGalleryModal {
  isOpen: boolean;
  closeModal: () => void;
  imagesSrc?: string[];
}

const GalleryModal = ({ isOpen, closeModal, imagesSrc }: IGalleryModal) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <Modal
      isOpen={isOpen}
      className="gallery-modal"
      onRequestClose={closeModal}
    >
      <div className="gallery-modal__inner container">
        <Swiper
          className="gallery-modal__slider"
          onSwiper={setSwiper}
          modules={[Navigation]}
        >
          {imagesSrc &&
            imagesSrc.map((imageSrc) => (
              <SwiperSlide className="gallery-modal__slide">
                <img src={imageSrc} alt="" className="gallery-modal__image" />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="gallery-modal__navigation">
          <button
            type="button"
            className="gallery-modal__navigation-button gallery-modal__navigation-button--prev"
            onClick={() => swiper?.slidePrev()}
          >
            <ArrowIcon />
          </button>
          <button
            type="button"
            className="gallery-modal__navigation-button gallery-modal__navigation-button--next"
            onClick={() => swiper?.slideNext()}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="gallery-modal__close-button"
        onClick={closeModal}
      >
        <CrossIcon />
      </button>
    </Modal>
  );
};

export default GalleryModal;
