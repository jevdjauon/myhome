export const cryptoFetchData = async () => {
  const apiOptions = {
    method: "GET",
    //   url: "https://crypto-news16.p.rapidapi.com/news/top/5",
    headers: {
      "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
      "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(apiOptions);
    return response.data;
  } catch (error) {
    return error;
  }
};
