import axios from "axios";

export const fetchArticles = async (query) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      per_page: 15,
      client_id: "uflcuQcwbpWkYBHWWV3KgG_J0Ie4-14PU_pbD_mECdU",
    },
  });
  return response.data;
};
