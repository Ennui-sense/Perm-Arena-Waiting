import "./News.scss";

import Section from "~/layouts/Section/Section";

import { newsData } from "~/data/newsData";
import NewsCard from "~/components/NewsCard/NewsCard";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "~/hooks/useMediaQuery";

const News = () => {
  const isMobile = useMediaQuery("mobile");

  return (
    <Section
      title="Новости"
      subtitle="Будьте в курсе главных событий"
      sectionName="news"
    >
      <div className="news__inner">
        {!isMobile ? (
          <ul className="news__list">
            {newsData.map((newsData) => (
              <li className="news__item" key={newsData.id}>
                <NewsCard newsData={newsData} key={newsData.id} />
              </li>
            ))}
          </ul>
        ) : (
          <Swiper className="news__slider" spaceBetween={20} slidesPerView={1.2}>
            {newsData.map((newsData) => (
              <SwiperSlide className="news__slide" key={newsData.id}>
                <NewsCard newsData={newsData} key={newsData.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </Section>
  );
};

export default News;
