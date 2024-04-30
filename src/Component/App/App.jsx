import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import axios from "axios";
import css from "../App/App.module.css";
import { fetchArticles } from "../../article-ap";

export default function App() {
  const [articles, setArticles] = useState([]);

  const handleSearch = async (newQuery) => {
    console.log(newQuery);
    const data = await fetchArticles(newQuery);
    setArticles(data);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>{articles.length > 0 && <ImageGallery items={articles} />}</div>
    </div>
  );
}
