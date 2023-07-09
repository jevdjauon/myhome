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
  console.log(data);
  return (
    <div className="memes-container">
      {data.map((item) => (
        <img src={item.image} alt="" />
      ))}
    </div>
  );
};

export default ProgrammingMemes;
