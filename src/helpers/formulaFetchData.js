import axios from "axios";

export const formulaFetchData = async () => {
  const options = {
    method: "GET",
    url: "https://fia-formula-1-championship-statistics.p.rapidapi.com/api/schedule/race-schedule",
    headers: {
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host": "fia-formula-1-championship-statistics.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
