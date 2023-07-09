// Apps
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Pages
import CryptoNews from "../pages/CryptoNews";
import TopMovies from "../pages/TopMovies";
import FormulaSeason from "../pages/FormulaSeason";
import News from "../pages/News";
import ProgrammingMemes from "../pages/ProgrammingMemes";
import TodayInHistory from "../pages/TodayInHistory";

// Others
import Hamburger from "./Hamburger";
import "../styles/interests.scss";

const Interests = () => {
  const [cryptoShown, setCryptoShown] = useState(false);
  const [moviesShown, setMoviesShown] = useState(false);
  const [f1Shown, setf1Shown] = useState(false);
  const [interestsMenu, setInterestsMenu] = useState(false);
  const [memesShown, setMemesShown] = useState(false);
  const [todayHistory, setTodayHistory] = useState(false);

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

  const showMemes = () => {
    memesShown ? setMemesShown(false) : setMemesShown(true);
  };

  const showTodayInHistory = () => {
    todayHistory ? setTodayHistory(false) : setTodayHistory(true);
  };

  return (
    <div className="interests-container">
      <div className="interests-navbar" style={{ position: "sticky" }}>
        <Link to="/">News</Link>
        {cryptoShown ? <Link to="crypto-news">Crypto News</Link> : null}
        {moviesShown ? <Link to="top-movies">Top Movies</Link> : null}
        {f1Shown ? <Link to="formula-season">Formula 1</Link> : null}
        {memesShown ? (
          <Link to="programming-memes">Programming Memes</Link>
        ) : null}
        {todayHistory ? (
          <Link to="today-in-history">Today In History</Link>
        ) : null}

        {interestsMenu ? (
          <div className="customize">
            <h4>What You Want To See?</h4>
            <div className="customize-buttons">
              <button onClick={showCryptoNews}>Crypto News</button>
              <button onClick={showTopMovies}>Top Movies IMDB</button>
              <button onClick={showF1}>F1</button>
              <button onClick={showMemes}>Programming Memes</button>
              <button onClick={showTodayInHistory}>Today In History</button>
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
        <Route path="programming-memes" element={<ProgrammingMemes />} />
        <Route path="today-in-history" element={<TodayInHistory />} />
      </Routes>
    </div>
  );
};

export default Interests;
