import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/backgroundImage.scss";

import { imageFetchData } from "../helpers/imageFetchData";
import { useQuery } from "@tanstack/react-query";

const BackgroundImage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["background-image"],
    queryFn: imageFetchData,
    staleTime: 60 * (60 * 1000),
    cacheTime: 120 * (60 * 1000),
  });

  if (isLoading) return "Loading...";
  if (error) return error.message;

  let bgImageUrl = data.photos[0].src.landscape;

  return (
    <div className="bg-container">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
        }}
      ></div>
      <Link to="https://www.pexels.com">Photos provided by Pexels</Link>
    </div>
  );
};

export default BackgroundImage;
