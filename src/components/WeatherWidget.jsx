import axios from "axios";
import { useState } from "react";
import data from "../data/weatherTestData.json";
import "../styles/weatherToolbar.scss";

const WeatherToolbar = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  // not dynamic data from JSON for developing
  const city = data.name;
  const dataIcon = data.weather[0].icon;
  const weatherLogoUrl = `https://openweathermap.org/img/w/${dataIcon}.png`;
  const dataTemp = data.main.temp;
  const temp = parseInt((dataTemp - 32) * (5 / 9));
  const humidity = data.main.humidity;
  const pressure = data.main.pressure / 1000;
  const windSpeed = data.wind.speed;

  // weatherToolbar dropdown
  const dropdownOpen = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  //   const options = {
  //     method: 'GET',
  //     url: 'https://open-weather13.p.rapidapi.com/city/landon',
  //     headers: {
  //       'X-RapidAPI-Key': 'a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39',
  //       'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //   } catch (error) {
  //       console.error(error);
  //   }

  return (
    <div>
      <button onClick={() => dropdownOpen()} className="weather-container">
        <p>{city}</p>
        <img src={weatherLogoUrl} alt="" />
        <p>{temp}&#x2103;</p>
      </button>
      {dropdown ? (
        <div className="weather-dropdown">
          <div>
            <p>{city}</p>
            <p>{temp}&#x2103;</p>
          </div>
          <div>
            <img src={weatherLogoUrl} alt="" />
          </div>
          <div>
            <p>{humidity} %</p>
            <p>{pressure} BAR</p>
            <p>{windSpeed} km/h</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default WeatherToolbar;
