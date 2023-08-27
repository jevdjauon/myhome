import { NavLink } from "react-router-dom";
import "../styles/cryptoArticle.scss";

const CryptoArticle = ({ title, url, description, date }) => {
  return (
    <div className="crypto-article">
      <p>{date}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <NavLink to={url} target="_blank">
        Reed More
      </NavLink>
    </div>
  );
};

export default CryptoArticle;
