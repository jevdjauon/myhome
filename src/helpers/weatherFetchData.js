import axios from "axios";

export const locationFetchData = async () => {
  const options = {
    method: "GET",
    // url: "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation",
    params: {
      apikey: "873dbe322aea47f89dcf729dcc8f60e8",
    },
    headers: {
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host":
        "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const weatherFetchData = async (city) => {
  const options = {
    method: "GET",
    // url: `https://open-weather13.p.rapidapi.com/city/${city}`,
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
