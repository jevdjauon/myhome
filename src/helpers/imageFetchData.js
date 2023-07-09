import axios from "axios";

export const imageFetchData = async ({ quary = "mountains" }) => {
  const options = {
    method: "GET",
    url: `https://api.pexels.com/v1/search?query=${quary}&per_page=10`,
    headers: {
      Authorization: "rhoMW214PqLV090Bw9aR2kIcDLmULyTFRVNWfkE6EIk9HmMS4Zf6Av8G",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};
