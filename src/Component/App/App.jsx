import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import axios from "axios";
import css from "../App/App.module.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function getArticles() {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=uflcuQcwbpWkYBHWWV3KgG_J0Ie4-14PU_pbD_mECdU"
      );
      console.log(response.data);
      setArticles(response.data);
    }

    getArticles();
  }, []);
  return (
    <div>
      <SearchBar />
      <div>{articles.length > 0 && <ImageGallery items={articles} />}</div>
    </div>
  );
}
