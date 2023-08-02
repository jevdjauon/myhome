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

  const showLiveScore = () => {
    liveScore ? setLiveScore(false) : setLiveScore(true);
  };

  // const togglePage = (targetState, targetSet) => {
  //   targetState ? targetSet(false) : targetSet(true);
  // };

  const showNewsMenu = () => {
    newsAcc ? setNewsAcc(false) : setNewsAcc(true);
  };

  const showEntertainmentMenu = () => {
    entertainmentAcc ? setentertainmentAcc(false) : setentertainmentAcc(true);
  };

  const showSportsMenu = () => {
    sportsAcc ? setSportsAcc(false) : setSportsAcc(true);
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
        {liveScore ? <Link to="live-scores">Live Scores</Link> : null}

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
        <Route path="live-scores" element={<LiveScores />} />
      </Routes>
    </div>
  );
};

export default Interests;
