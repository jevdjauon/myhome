import axios from "axios";
import { useEffect, useState } from "react";
import dataTest from "../data/weatherTestData.json";
import "../styles/weatherToolbar.scss";
import { useQuery } from "@tanstack/react-query";
import { weatherFetchData } from "../helpers/weatherFetchData";
import capitalsData from "../data/capitalsData.json";

const WeatherToolbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState("Belgrade");

  const { isLoading, error, data } = useQuery({
    queryKey: ["weatherData"],
    queryFn: () => weatherFetchData(location),
  });

  const getWeatherIcon = async () => {
    setWeatherIcon(
      `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    );
  };

  const getTemperature = async () => {
    setTemperature(parseInt((data.main.temp - 32) * (5 / 9)));
  };

  useEffect(() => {
    if (data) {
      getWeatherIcon();
      getTemperature();
    } else {
      null;
    }
  }, [data]);

  const dropdownOpen = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  return (
    <div>
      {data && (
        <button onClick={() => dropdownOpen()} className="weather-container">
          <p>{data.name}</p>
          <img src={weatherIcon} alt="" />
          <h4>{temperature}&#x2103;</h4>
        </button>
      )}

      {data && dropdown ? (
        <div className="weather-dropdown">
          <h3>{data.name}</h3>

          <div className="top">
            <img src={weatherIcon} alt="" />
            <p>{temperature}&#x2103;</p>
          </div>
          <div className="bottom">
            <p>
              Humidity: <span>{data.main.humidity} %</span>
            </p>
            <p>
              Air Presure: <span>{dataTest.main.pressure / 1000} BAR</span>
            </p>
            <p>
              Wind Speed: <span>{data.wind.speed} km/h</span>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default WeatherToolbar;
