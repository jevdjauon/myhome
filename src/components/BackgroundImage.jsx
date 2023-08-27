import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/backgroundImage.scss";

import { imageFetchData } from "../helpers/imageFetchData";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const selectOptions = [
  {
    label: "forest",
    value: "forest",
  },
  {
    label: "mountain",
    value: "mountain",
  },
  {
    label: "river",
    value: "river",
  },
  {
    label: "building",
    value: "building",
  },
  {
    label: "sea",
    value: "sea",
  },
  {
    label: "beach",
    value: "beach",
  },

  {
    label: "animals",
    value: "animals",
  },
  {
    label: "space",
    value: "space",
  },
  {
    label: "sports",
    value: "sports",
  },
  {
    label: "cars",
    value: "cars",
  },
  {
    label: "fashion",
    value: "fashion",
  },
];

const BackgroundImage = () => {
  const [backgroundOption, setBackgroundOption] = useState(
    localStorage.getItem("backgroundOption")
      ? localStorage.backgroundOption
      : selectOptions[0].value
  );

  const setSelectedOption = (event) => {
    const option = selectOptions.find(
      (option) => option.value === event.target.value
    );

    setBackgroundOption(option.value);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["background-image"],
    queryFn: () => imageFetchData(backgroundOption),
    staleTime: 60 * (60 * 1000),
    cacheTime: 120 * (60 * 1000),
  });

  if (isLoading) return "Loading...";
  if (error) return error.message;
  let imgNmb = parseInt(Math.random() * 10);
  let bgImageUrl = data.photos[imgNmb].src.landscape;

  const changeBackground = (e) => {
    e.preventDefault();
    localStorage.setItem("backgroundOption", backgroundOption);
  };

  return (
    <div className="bg-container">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
        }}
      ></div>
      <div>
        <form action="" className="bg-options">
          <select onChange={setSelectedOption}>
            {selectOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button onClick={changeBackground}>Get state</button>
        </form>
        <Link to="https://www.pexels.com">Photos provided by Pexels</Link>
      </div>
    </div>
  );
};

export default BackgroundImage;
