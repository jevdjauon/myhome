import { useQuery } from "@tanstack/react-query";
import { searchWidgetData } from "../helpers/searchWidgetData.js";

const SearchWidget = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["search-word"],
    queryFn: searchWidgetData,
  });
  if (isLoading) return "Loading...";
  if (error) return error.message;

  return <div>search</div>;
};

export default SearchWidget;
