// App
import { Link } from "react-router-dom";
import { newsFetchData } from "../helpers/newsFetchData";
import { useQuery } from "@tanstack/react-query";

// Other
import "../styles/news.scss";

const News = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["newsData"],
    queryFn: newsFetchData,
    cacheTime: 60 * (60 * 1000),
  });

  return (
    <div className="news">
      {data &&
        data.results.map(
          ({ title, description, image_url, creator, content, link }) => {
            let smallContent = content.slice(0, 500);
            return (
              <div className="news-article" key={link}>
                <h3>{title}</h3>
                <p>{description}</p>
                <img src={image_url} alt="" />
                <p>{creator}</p>
                <Link to={link} target="_blank">
                  Reed More
                </Link>
                <p className="article-content">
                  {smallContent}
                  <span>...</span>
                </p>
                <button>Reed More</button>
              </div>
            );
          }
        )}
    </div>
  );
};

export default News;
