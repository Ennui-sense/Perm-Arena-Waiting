import "./Gallery.scss";
import "swiper/css";

import Section from "~/layouts/Section/Section";
import exampleImageSrc from "~/assets/images/gallery example.jpg";
import exampleImageSrc2 from "~/assets/images/gallery example 2.jpg";
import exampleImageSrc3 from "~/assets/images/gallery example 3.jpg";
import exampleImageSrc4 from "~/assets/images/gallery example 4.jpg";
import exampleImageSrc5 from "~/assets/images/hero-bg.jpg";
import GalleryCard from "~/components/GalleryCard/GalleryCard";
import useMediaQuery from "~/hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import GalleryModal from "~/components/GalleryModal/GalleryModal";
import { useState } from "react";

const IMAGES = [
  {
    imagesSrc: [
      exampleImageSrc,
      exampleImageSrc,
      exampleImageSrc,
      exampleImageSrc,
    ],
    title: "Ход строительства",
    value: "building",
  },
  {
    imagesSrc: [
      exampleImageSrc2,
      exampleImageSrc2,
      exampleImageSrc2,
      exampleImageSrc2,
    ],
    title: "Интерьер",
    value: "interior",
  },
  {
    imagesSrc: [
      exampleImageSrc3,
      exampleImageSrc3,
      exampleImageSrc3,
      exampleImageSrc3,
    ],
    title: "Инфраструктура",
    value: "infrastructure",
  },
  {
    imagesSrc: [
      exampleImageSrc5,
      exampleImageSrc4,
      exampleImageSrc4,
      exampleImageSrc4,
    ],
    title: "Экстерьер",
    value: "exterior",
  },
];

const Gallery = () => {
  const isMobile = useMediaQuery("mobile");
  const [valueOpenedModal, setValueOpenedModal] = useState<string | null>(null);

  return (
    <Section
      sectionName="gallery"
      title="Галерея"
      subtitle="ОБРАЗ АРЕНЫ"
      withHeaderCenter
    >
      <div className="gallery__inner">
        {!isMobile ? (
          <ul className="gallery__list">
            {IMAGES.map(({ imagesSrc, title, value }, index) => (
              <li className="gallery__item" key={`${title}-${index}`}>
                <GalleryCard
                  imageSrc={imagesSrc[0]}
                  title={title}
                  onClick={() => setValueOpenedModal(value)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <Swiper
            className="gallery__slider"
            slidesPerView={1.2}
            spaceBetween={15}
          >
            {IMAGES.map(({ imagesSrc, title, value }, index) => (
              <SwiperSlide className="gallery__slide" key={`${title}-${index}`}>
                <GalleryCard
                  imageSrc={imagesSrc[0]}
                  title={title}
                  onClick={() => setValueOpenedModal(value)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <GalleryModal
        isOpen={valueOpenedModal !== null}
        closeModal={() => setValueOpenedModal(null)}
        imagesSrc={
          IMAGES.find(({ value }) => value === valueOpenedModal)?.imagesSrc
        }
      />
    </Section>
  );
};

export default Gallery;
