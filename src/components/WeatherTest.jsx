import { useEffect, useState } from "react";
import dataTest from "../data/weatherTestData.json";
import "../styles/weatherToolbar.scss";
import { useQuery } from "@tanstack/react-query";
import { weatherFetchData } from "../helpers/weatherFetchData";
import Loader from "./Loader";

const WeatherToolbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState("Belgrade");

  const { isLoading, error, data } = useQuery({
    queryKey: ["weatherData"],
    queryFn: () => weatherFetchData(location),
  });

  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;

  // console.log(data && data);
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
    }
  }, []);

  // weatherToolbar dropdown
  const dropdownOpen = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };
  // console.log(data);

  return (
    <div>
      {data && (
        <button onClick={() => dropdownOpen()} className="weather-container">
          <p>{data.name}</p>
          <img src={weatherIcon} alt="" />
          <p>{temperature}&#x2103;</p>
        </button>
      )}

      {/* <button onClick={() => dropdownOpen()} className="weather-container">
        <p>{dataTest.name}</p>
        <img
          src={`https://openweathermap.org/img/w/${dataTest.weather[0].icon}.png`}
          alt=""
        />
        <p>{parseInt((dataTest.main.temp - 32) * (5 / 9))}&#x2103;</p>
      </button> */}

      {data && dropdown ? (
        <div className="weather-dropdown">
          <div>
            <p>{data.name}</p>
            <p>{temperature}&#x2103;</p>
          </div>
          <div>
            <img src={weatherIcon} alt="" />
          </div>
          <div>
            <p>{data.main.humidity} %</p>
            <p>{dataTest.main.pressure / 1000} BAR</p>
            <p>{data.wind.speed} km/h</p>
          </div>
        </div>
      ) : null}

      {/* {dropdown ? (
        <div className="weather-dropdown">
          <div>
            <p>{dataTest.name}</p>
            <p>{parseInt((dataTest.main.temp - 32) * (5 / 9))}&#x2103;</p>
          </div>
          <div>
            <img
              src={`https://openweathermap.org/img/w/${dataTest.weather[0].icon}.png`}
              alt=""
            />
          </div>
          <div>
            <p>{dataTest.main.humidity} %</p>
            <p>{dataTest.main.pressure / 1000} BAR</p>
            <p>{dataTest.wind.speed} km/h</p>
          </div>
        </div>
      ) : null} */}
    </div>
  );
};
export default WeatherToolbar;
