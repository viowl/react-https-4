import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import css from "../App/App.module.css";
import { fetchArticles } from "../../article-ap";
import Loader from "../Loader/Loader";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchArticles(query, page);
        setArticles(data.results);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query, page]);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    console.log(newQuery);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <p className={css.p}>Oops! Error! Reload! </p>}

      {articles.length > 0 && <ImageGallery items={articles} />}
      {articles.length > 0 && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}
