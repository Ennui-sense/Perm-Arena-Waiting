import "./NewsCard.scss";

import type { NewsType } from "~/types";

import Button from "../Button/Button";

interface INewsCard {
  newsData: NewsType;
}

const NewsCard = ({ newsData }: INewsCard) => {
  const { date, imageSrc, text, title } = newsData;

  return (
    <article className="news-card">
      <div className="news-card__inner">
        <p className="news-card__date">{date}</p>
        <div className="news-card__wrapper-image">
          <img
            src={imageSrc}
            alt=""
            className="news-card__image"
            width={550}
            height={300}
            loading="lazy"
          />
        </div>

        <div className="news-card__content">
          <div className="news-card__body">
            <h3 className="news-card__title">{title}</h3>
            <p className="news-card__text">{text}</p>
          </div>

          <Button className="news-card__button" variant="transparent">
            Читать
          </Button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
