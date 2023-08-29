import axios from "axios";

export const weatherFetchData = async (city) => {
  const options = {
    method: "GET",
    url: `https://open-weather13.p.rapidapi.com/city/${city}`,
    headers: {
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
