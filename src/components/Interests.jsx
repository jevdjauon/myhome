// Components
import CryptoArticle from "../components/CryptoArticle.jsx";

// Others
// import { interestsFetchData } from "../helpers/interestsFetchData.js";
import "../styles/interests.scss";
import testData from "../data/interestsTestData.json";

const Interests = () => {
  // comment out before build
  /*
    const { isLoading, error, data } = useQuery({
    queryKey: ["interests-data"],
    queryFn: interestsFetchData,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
*/

  return (
    <div className="interests-container">
      <div className="interests-navbar">
        <div>menu</div>
        <div>customize</div>
      </div>
      <div>
        {testData &&
          testData.map((item) => (
            <div key={item.title}>
              <CryptoArticle
                title={item.title}
                url={item.url}
                description={item.description}
                date={item.date}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Interests;
