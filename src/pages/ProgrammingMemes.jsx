import { useQuery } from "@tanstack/react-query";
import { memeFetchData } from "../helpers/memeFetchData";
import "../styles/memes.scss";

const ProgrammingMemes = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["programming-memes"],
    queryFn: memeFetchData,
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="memes-container">
      {data &&
        data.map((item, index) => <img src={item.image} alt="" key={index} />)}
    </div>
  );
};

export default ProgrammingMemes;
