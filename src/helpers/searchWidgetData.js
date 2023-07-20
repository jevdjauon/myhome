import axios from "axios";

export const searchWidgetData = async () => {
  const options = {
    method: "GET",
    // url: "https://google-search72.p.rapidapi.com/search",
    params: {
      q: "word cup",
      gl: "us",
      lr: "lang_en",
      num: "10",
      start: "0",
    },
    headers: {
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
