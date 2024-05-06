import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ items, openModal }) {
  const handleImageClick = (imageUrl) => {
    openModal(imageUrl);
  };

  return (
    <ul className={css.ul}>
      {items.map((item) => (
        <li key={item.id} onClick={() => handleImageClick(item.urls.full)}>
          <ImageCard src={item.urls.small} alt={item.alt_description} />
        </li>
      ))}
    </ul>
  );
}

/* <img src={item.urls.small} alt={item.alt_description} />; */
