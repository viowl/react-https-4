import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.ul}>
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.urls.small} alt={item.alt_description} />
        </li>
      ))}
    </ul>
  );
}
