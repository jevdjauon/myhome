// Apps
import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

// Pages
import CryptoNews from "../pages/CryptoNews";
import TopMovies from "../pages/TopMovies";
import FormulaSeason from "../pages/FormulaSeason";
import News from "../pages/News";
import ProgrammingMemes from "../pages/ProgrammingMemes";
import TodayInHistory from "../pages/TodayInHistory";
import LiveScores from "../pages/LiveScores";

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
  const [liveScore, setLiveScore] = useState(false);
  const [newsAcc, setNewsAcc] = useState(false);
  const [entertainmentAcc, setentertainmentAcc] = useState(false);
  const [sportsAcc, setSportsAcc] = useState(false);

  const menuOpen = () => {
    interestsMenu ? setInterestsMenu(false) : setInterestsMenu(true);
    newsAcc ? setNewsAcc(false) : null;
    entertainmentAcc ? setentertainmentAcc(false) : null;
    sportsAcc ? setSportsAcc(false) : null;
  };

  const showCryptoNews = () => {
    cryptoShown ? setCryptoShown(false) : setCryptoShown(true);
    if (localStorage.getItem("cryptoNews")) {
      localStorage.removeItem("cryptoNews");
    } else localStorage.setItem("cryptoNews", "shown");
  };

  const showTopMovies = () => {
    moviesShown ? setMoviesShown(false) : setMoviesShown(true);
    if (localStorage.getItem("movies")) {
      localStorage.removeItem("movies");
    } else localStorage.setItem("movies", "shown");
  };

  const showF1 = () => {
    f1Shown ? setf1Shown(false) : setf1Shown(true);
    if (localStorage.getItem("f1")) {
      localStorage.removeItem("f1");
    } else localStorage.setItem("f1", "shown");
  };

  const showMemes = () => {
    memesShown ? setMemesShown(false) : setMemesShown(true);

    if (localStorage.getItem("memes")) {
      localStorage.removeItem("memes");
    } else localStorage.setItem("memes", "shown");
  };

  const showTodayInHistory = () => {
    todayHistory ? setTodayHistory(false) : setTodayHistory(true);

    if (localStorage.getItem("todayInHistory")) {
      localStorage.removeItem("todayInHistory");
    } else localStorage.setItem("todayInHistory", "shown");
  };

  const showLiveScore = () => {
    liveScore ? setLiveScore(false) : setLiveScore(true);

    if (localStorage.getItem("liveScore")) {
      localStorage.removeItem("liveScore");
    } else localStorage.setItem("liveScore", "shown");
  };

  const showNewsMenu = () => {
    newsAcc ? setNewsAcc(false) : setNewsAcc(true);
  };

  const showEntertainmentMenu = () => {
    entertainmentAcc ? setentertainmentAcc(false) : setentertainmentAcc(true);
  };

  const showSportsMenu = () => {
    sportsAcc ? setSportsAcc(false) : setSportsAcc(true);
  };

  useEffect(() => {
    localStorage.getItem("cryptoNews") ? setCryptoShown(true) : null;
    localStorage.getItem("movies") ? setMoviesShown(true) : null;
    localStorage.getItem("f1") ? setf1Shown(true) : null;
    localStorage.getItem("memes") ? setMemesShown(true) : null;
    localStorage.getItem("todayInHistory") ? setTodayHistory(true) : null;
    localStorage.getItem("liveScore") ? setLiveScore(true) : null;
  }, []);

  return (
    <div className="interests-container">
      <div className="interests-navbar" style={{ position: "sticky" }}>
        <nav>
          <NavLink to="/">News</NavLink>
          {cryptoShown ? <NavLink to="crypto-news">Crypto News</NavLink> : null}
          {moviesShown ? <NavLink to="top-movies">Top Movies</NavLink> : null}
          {f1Shown ? <NavLink to="formula-season">Formula 1</NavLink> : null}
          {memesShown ? (
            <NavLink to="programming-memes">Programming Memes</NavLink>
          ) : null}
          {todayHistory ? (
            <NavLink to="today-in-history">Today In History</NavLink>
          ) : null}
          {liveScore ? <NavLink to="live-scores">Live Scores</NavLink> : null}
        </nav>

        {interestsMenu ? (
          <div className="customize">
            <h4>What You Want To See?</h4>
            <div className="customize-buttons">
              <button className="accordion" onClick={showNewsMenu}>
                News
              </button>
              <div className={newsAcc ? "active" : "hidden"}>
                <button onClick={showCryptoNews}>Crypto News</button>
              </div>
              <button className="accordion" onClick={showEntertainmentMenu}>
                Entertainment
              </button>
              <div className={entertainmentAcc ? "active" : "hidden"}>
                <button onClick={showTopMovies}>Top Movies IMDB</button>
                <button onClick={showMemes}>Programming Memes</button>
                <button onClick={showTodayInHistory}>Today In History</button>
              </div>
              <button className="accordion" onClick={showSportsMenu}>
                Sports
              </button>
              <div className={sportsAcc ? "active" : "hidden"}>
                <button onClick={showF1}>F1</button>
                <button onClick={showLiveScore}>Live Scores</button>
              </div>
            </div>
          </div>
        ) : null}
        <div className="menu">
          <p>Customize</p>
          <Hamburger
            styleName={interestsMenu ? "opened interestsMenu" : "interestsMenu"}
            clickFunction={menuOpen}
          />
        </div>
      </div>
      <main>
        <Routes>
          <Route path="/" default element={<News />} />
          <Route path="crypto-news" default element={<CryptoNews />} />
          <Route path="top-movies" element={<TopMovies />} />
          <Route path="formula-season" element={<FormulaSeason />} />
          <Route path="programming-memes" element={<ProgrammingMemes />} />
          <Route path="today-in-history" element={<TodayInHistory />} />
          <Route path="live-scores" element={<LiveScores />} />
        </Routes>
      </main>
    </div>
  );
};

export default Interests;
