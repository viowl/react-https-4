import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import css from "../App/App.module.css";
import { fetchArticles } from "../../article-ap";
import Loader from "../Loader/Loader";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (newQuery) => {
    try {
      setIsLoading(true);
      setArticles([]);
      setError(false);
      const data = await fetchArticles(newQuery);
      setArticles(data.results);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
    console.log(newQuery);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <p className={css.p}>Oops! Error! Reload! </p>}

      <div>{articles.length > 0 && <ImageGallery items={articles} />}</div>
    </div>
  );
}
