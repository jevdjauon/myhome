// Components
import CryptoArticle from "../components/CryptoArticle.jsx";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader.jsx";

// Others
import testData from "../data/interestsTestData.json";
import { cryptoFetchData } from "../helpers/cryptoFetchData.js";
import "../styles/cryptoNews.scss";

const CryptoNews = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["interests-data"],
    queryFn: cryptoFetchData,
  });
  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="crypto-container">
      {data &&
        data.map(({ title, url, description, date }) => (
          <div key={title}>
            <CryptoArticle
              title={title}
              url={url}
              description={description}
              date={date}
            />
          </div>
        ))}
    </div>
  );
};

export default CryptoNews;
