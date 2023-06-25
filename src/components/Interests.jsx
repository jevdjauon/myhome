// Apps
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Pages
import CryptoNews from "../pages/CryptoNews";
import TopMovies from "../pages/TopMovies";
import FormulaSeason from "../pages/FormulaSeason";
import News from "../pages/News";

// Others
import Hamburger from "./Hamburger";
import "../styles/interests.scss";

const Interests = () => {
  const [cryptoShown, setCryptoShown] = useState(false);
  const [moviesShown, setMoviesShown] = useState(false);
  const [f1Shown, setf1Shown] = useState(false);
  const [interestsMenu, setInterestsMenu] = useState(false);

  const menuOpen = () => {
    interestsMenu ? setInterestsMenu(false) : setInterestsMenu(true);
  };

  const showCryptoNews = () => {
    cryptoShown ? setCryptoShown(false) : setCryptoShown(true);
  };

  const showTopMovies = () => {
    moviesShown ? setMoviesShown(false) : setMoviesShown(true);
  };

  const showF1 = () => {
    f1Shown ? setf1Shown(false) : setf1Shown(true);
  };

  return (
    <div className="interests-container">
      <div className="interests-navbar" style={{ position: "sticky" }}>
        <Link to="/">News</Link>
        {cryptoShown ? <Link to="crypto-news">Crypto News</Link> : null}
        {moviesShown ? <Link to="top-movies">Top Movies</Link> : null}
        {f1Shown ? <Link to="formula-season">Formula 1</Link> : null}

        {interestsMenu ? (
          <div className="customize">
            <h4>What You Want To See?</h4>
            <div className="customize-buttons">
              <button onClick={showCryptoNews}>Crypto News</button>
              <button onClick={showTopMovies}>Top Movies IMDB</button>
              <button onClick={showF1}>F1</button>
            </div>
          </div>
        ) : null}
        <Hamburger
          styleName={interestsMenu ? "opened interestsMenu" : "interestsMenu"}
          clickFunction={menuOpen}
        />
      </div>
      <Routes>
        <Route path="/" default element={<News />} />
        <Route path="crypto-news" default element={<CryptoNews />} />
        <Route path="top-movies" element={<TopMovies />} />
        <Route path="formula-season" element={<FormulaSeason />} />
      </Routes>
    </div>
  );
};

export default Interests;
