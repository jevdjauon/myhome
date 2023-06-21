// Apps
import { Link, Routes, Route } from "react-router-dom";

// Pages
import CryptoNews from "../pages/CryptoNews";
import TopMovies from "../pages/TopMovies";
// Others
import "../styles/interests.scss";

const Interests = () => {
  return (
    <div className="interests-container">
      <div className="interests-navbar">
        <Link to="crypto-news">Crypto News</Link>
        <Link to="top-movies">Top Movies</Link>

        <div>customize</div>
      </div>
      <Routes>
        <Route path="crypto-news" element={<CryptoNews />} />
        <Route path="top-movies" element={<TopMovies />} />
      </Routes>
    </div>
  );
};

export default Interests;
