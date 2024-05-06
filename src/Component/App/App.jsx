import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchArticles(query, page);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setArticles([]);
    console.log(newQuery);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {error && <p className={css.p}>Oops! Error! Reload! </p>}

      {articles.length > 0 && (
        <ImageGallery items={articles} openModal={openModal} />
      )}
      {articles.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImageUrl}
      />
      <div className={css.loader}>{isLoading && <Loader />}</div>
    </div>
  );
}
