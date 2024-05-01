import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchArticles = async (query) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      per_page: 15,
      client_id: "JPaWKYjenJwTJReunNYKAxgGxmQ5PDb5eOvxhAmCdvk",
    },
  });
  console.log(response);
  return response.data;
};
