import "./GalleryCard.scss";

interface IGalleryCard {
  imageSrc: string;
  title: string;
  onClick: () => void;
}

const GalleryCard = ({ imageSrc, title, onClick }: IGalleryCard) => {
  return (
    <>
      <article className="gallery-card" onClick={onClick}>
        <div className="gallery-card__bg">
          <img
            src={imageSrc}
            alt=""
            className="gallery-card__bg-image"
            loading="lazy"
          />
        </div>
        <h3 className="gallery-card__title">{title}</h3>
      </article>
    </>
  );
};

export default GalleryCard;
