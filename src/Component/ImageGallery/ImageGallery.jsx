export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.urls.thumb} alt={item.alt_description} />
        </li>
      ))}
    </ul>
  );
}
