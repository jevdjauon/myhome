import { useState, useEffect } from "react";
import LinkItem from "./LinkItem";
import "../styles/favoriteLinks.scss";

const FavoriteLinks = () => {
  const [addLinks, setAddLinks] = useState(false);
  const [linksData, setLinksData] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const toggleAddLinks = () => {
    addLinks ? setAddLinks(false) : setAddLinks(true);
  };

  useEffect(() => {
    if (localStorage.getItem("favorite")) {
      setLinksData(JSON.parse(localStorage.favorite));
    }
  }, []);

  const addNewFavorite = (e) => {
    e.preventDefault();

    const data = localStorage.getItem("favorite");
    const newFavoriteData = {
      title: newTitle,
      url: newUrl,
    };

    if (localStorage.getItem("favorite")) {
      localStorage.setItem(
        "favorite",
        `${data.replace("]", "")},${JSON.stringify(newFavoriteData)}]`
      );
    } else {
      localStorage.setItem("favorite", `[${JSON.stringify(newFavoriteData)}]`);
    }

    setLinksData(localStorage.getItem("favorite"));
    setAddLinks(false);
  };

  return (
    <div className="favorite-links">
      {linksData &&
        linksData.map((item, index) => (
          <LinkItem key={index} title={item.title} url={item.url} />
        ))}

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
          <form action="">
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
          </form>

          <button onClick={addNewFavorite}>Add Favorite</button>
        </div>
      ) : null}
    </div>
  );
};

export default FavoriteLinks;
