// Apps
import { Link, Routes, Route } from "react-router-dom";

// Pages
import CryptoNews from "../pages/CryptoNews";
import TopMovies from "../pages/TopMovies";
import FormulaSeason from "../pages/FormulaSeason";

// Others
import "../styles/interests.scss";

const Interests = () => {
  return (
    <div className="interests-container">
      <div className="interests-navbar">
        <Link to="crypto-news">Crypto News</Link>
        <Link to="top-movies">Top Movies</Link>
        <Link to="formula-season">Formula 1</Link>
        <div>customize</div>
      </div>
      <Routes>
        <Route path="crypto-news" element={<CryptoNews />} />
        <Route path="top-movies" element={<TopMovies />} />
        <Route path="formula-season" element={<FormulaSeason />} />
      </Routes>
    </div>
  );
};

export default Interests;
