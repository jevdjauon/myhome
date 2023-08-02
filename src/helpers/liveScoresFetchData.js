import axios from "axios";

export const liveScoreFetchData = async () => {
  const options = {
    method: "GET",
    url: "https://livescore6.p.rapidapi.com/matches/v2/list-live",
    params: {
      Category: "soccer",
      Timezone: "0",
    },
    headers: {
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
