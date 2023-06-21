import { Link } from "react-router-dom";
import "../styles/cryptoArticle.scss";

const CryptoArticle = ({ title, url, description, date }) => {
  return (
    <div className="crypto-article">
      <p>{date}</p>
      <h3>{title}</h3>
      <Link to={url} target="_blank">
        Reed More
      </Link>
      <p>{description}</p>
    </div>
  );
};

export default CryptoArticle;
