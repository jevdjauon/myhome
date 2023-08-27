import axios from "axios";

export const newsFetchData = async () => {
  const options = {
    method: "POST",
    url: "https://newsnow.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
    },
    data: {
      text: "Top news",
      region: "eu",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
