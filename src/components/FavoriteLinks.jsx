import { useState, useEffect } from "react";

import LinkItem from "./LinkItem";

import "../styles/favoriteLinks.scss";
import favoriteData from "../data/favoriteLinksTestData.json";

const FavoriteLinks = () => {
  const [addLinks, setAddLinks] = useState(false);
  const [linksData, setLinksData] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const toggleAddLinks = () => {
    addLinks ? setAddLinks(false) : setAddLinks(true);
  };

  // const setLocalStorage = () => {
  //   linksData
  //     ? localStorage.setItem("links-data", JSON.stringify(linksData))
  //     : localStorage.setItem("links-data-test", JSON.stringify(favoriteData));
  // };

  // const getLocalStorage = async () => {
  //   const data = await JSON.parse(localStorage.getItem("links-data"));
  //   setLinksData(data.favoriteLinks);
  // };

  useEffect(() => {
    // localStorage.length === 0 ? null : getLocalStorage("links-data");
    // setLocalStorage();
    // linksData ? null : setLocalStorage();
    if (localStorage.favorite) {
      setLinksData(JSON.parse(localStorage.favorite));
    }
  }, []);

  const addNewFavorite = (e) => {
    e.preventDefault();

    // const count = linksData.length !== 0 ? linksData.length : 0;
    // console.log(count);
    // linksData[count] = {
    //   title: newTitle,
    //   url: newUrl,
    // };

    const newLinksData = {
      title: newTitle,
      url: newUrl,
    };
    setLinksData(newLinksData);
    localStorage.setItem("favorite", linksData);

    setAddLinks(false);
  };

  console.log("state", linksData);
  console.log("state length", typeof linksData);
  return (
    <div className="favorite-links">
      {linksData && <LinkItem url={linksData.url} title={linksData.title} />}

      {/* {linksData &&
        linksData.map((item) => (
          <LinkItem key={item.url} url={item.url} title={item.title} />
        )
        )} */}
      <button className="add-item" onClick={toggleAddLinks}>
        <img
          src="https://www.iconbolt.com/iconsets/akar-icons/plus.svg"
          alt=""
        />
        <p>Add Favorite</p>
      </button>
      {addLinks ? (
        <div style={{ backgroundColor: "cyan" }}>
          <p>Add Favorite</p>
          <p>Add Page Title</p>
          <input
            type="text"
            name="title"
            id="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <p>Past Page Url</p>
          <input
            type="url"
            name="url"
            id="url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <button onClick={addNewFavorite}>Add Favorite</button>
        </div>
      ) : null}
    </div>
  );
};

export default FavoriteLinks;
