// Components
import CryptoArticle from "../components/CryptoArticle.jsx";
import { useQuery } from "@tanstack/react-query";

// Others
import testData from "../data/interestsTestData.json";
import { cryptoFetchData } from "../helpers/cryptoFetchData.js";

const CryptoNews = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["interests-data"],
    queryFn: cryptoFetchData,
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {testData &&
        testData.map(({ title, url, description, date }) => (
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
