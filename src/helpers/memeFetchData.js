import axios from "axios";

export const memeFetchData = async () => {
  const options = {
    method: "GET",
    url: "https://programming-memes-images.p.rapidapi.com/v1/memes",
    headers: {
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
