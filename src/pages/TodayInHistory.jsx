import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { todayHistoryFetchData } from "../helpers/todayHistoryFetchData.js";
import Loader from "../components/Loader.jsx";
import "../styles/todayInHistory.scss";

const TodayInHistory = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["today-in-history"],
    queryFn: todayHistoryFetchData,
  });

  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <div className="today">
      {data && (
        <div className="today-article">
          <p>{data.article.date}</p>
          <h2>{data.article.title}</h2>
          <Link to={data.article.url}>Reed Article</Link>
        </div>
      )}
    </div>
  );
};

export default TodayInHistory;
