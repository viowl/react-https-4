import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchArticles = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      per_page: 10,
      client_id: "JPaWKYjenJwTJReunNYKAxgGxmQ5PDb5eOvxhAmCdvk",
      page,
    },
  });
  console.log(response);
  return response.data;
};
