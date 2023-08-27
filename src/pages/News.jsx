// App
import { Link } from "react-router-dom";
import { newsFetchData } from "../helpers/newsFetchData";
import { useQuery } from "@tanstack/react-query";

// Other
import "../styles/news.scss";
import Loader from "../components/Loader";

const News = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["newsData"],
    queryFn: newsFetchData,
    cacheTime: 60 * (60 * 1000),
  });
  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="news">
      {data &&
        data.news.map(({ date, body, image, source, title, url }) => (
          <div className="article">
            <img src={image} alt="" />
            <div className="content">
              <p>{source}</p>
              <h1>{title}</h1>
              <p>{body}</p>
            </div>
            <p>{date}</p>
          </div>
        ))}
    </div>
  );
};

export default News;
