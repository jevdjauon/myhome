import axios from "axios";

export const newsFetchData = async () => {
  const options = {
    method: "GET",
    url: "https://newsdata2.p.rapidapi.com/news",
    headers: {
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
    },
    params: {
      country: "us, gb, fr",
      //   category: "sports, health, entertainment",
      language: "en",
      q: "title, image",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
