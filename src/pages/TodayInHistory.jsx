import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { todayHistoryFetchData } from "../helpers/todayHistoryFetchData.js";

const TodayInHistory = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["today-in-history"],
    queryFn: todayHistoryFetchData,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  console.log(data.article);

  return (
    <div>
      <h3>Today In History</h3>

      {/* {data.article.map((item) => console.log(item))} */}
      {/* {data.article.map((item) => (
        <div>
          <h5>{item.title}</h5>
          <Link to={item.url}>Reed Article</Link>
        </div>
      ))} */}
    </div>
  );
};

export default TodayInHistory;
