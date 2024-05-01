import axios from "axios";

export const fetchArticles = async (query) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      per_page: 15,
      client_id: "JPaWKYjenJwTJReunNYKAxgGxmQ5PDb5eOvxhAmCdvk",
    },
  });
  console.log(response);
  return response.data;
};
