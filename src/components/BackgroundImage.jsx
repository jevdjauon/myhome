import { NavLink } from "react-router-dom";
import "../styles/backgroundImage.scss";

import { imageFetchData } from "../helpers/imageFetchData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loader from "./Loader";
import bgOptionsData from "../data/bgOptionsData.json";

const BackgroundImage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [backgroundOption, setBackgroundOption] = useState(
    localStorage.getItem("backgroundOption")
      ? localStorage.backgroundOption
      : bgOptionsData[0].value
  );

  const openMenu = () => {
    menuOpened ? setMenuOpened(false) : setMenuOpened(true);
  };

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

  if (isLoading) return <Loader />;
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
      <div className="main-menu">
        <button onClick={openMenu}>
          <img
            src="https://www.iconbolt.com/iconsets/charm-icons/menu-kebab.svg"
            alt=""
          />
        </button>
      </div>
      {menuOpened ? (
        <div className="menu-container">
          <div className="bg-options">
            <p>Select Background Theme</p>
            <form action="">
              <select onChange={setSelectedOption}>
                {bgOptionsData.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button onClick={changeBackground}>Chose</button>
            </form>
          </div>
          <div className="bg-credits">
            <NavLink to="https://www.pexels.com" target="_blank">
              Background provided by Pexels
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BackgroundImage;
