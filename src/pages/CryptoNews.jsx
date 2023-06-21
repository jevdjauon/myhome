// Components
import CryptoArticle from "../components/CryptoArticle.jsx";

// Others
import testData from "../data/interestsTestData.json";
// import { interestsFetchData } from "../helpers/interestsFetchData.js";

const CryptoNews = () => {
  /*
    comment out before build

    const { isLoading, error, data } = useQuery({
    queryKey: ["interests-data"],
    queryFn: interestsFetchData,
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(data);
*/

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
