import axios from "axios";

export const todayHistoryFetchData = async () => {
  const options = {
    method: "GET",
    url: "https://today-in-history.p.rapidapi.com/thisday",
    headers: {
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host": "today-in-history.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default todayHistoryFetchData;
