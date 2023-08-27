import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { moviesFetchData } from "../helpers/moviesFetchData";
import { ReactComponent as ArrowUp } from "../assets/upvote.svg";
import { ReactComponent as DownUp } from "../assets/downvote.svg";
import { ReactComponent as Equal } from "../assets/equal.svg";
import Loader from "../components/Loader";

import "../styles/topMovies.scss";

const TopMovies = () => {
  const [rankDirection, setRankRirection] = useState(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ["topMovies"],
    queryFn: moviesFetchData,
    staleTime: 60 * (60 * 1000),
    cacheTime: 60 * (60 * 1000),
  });

  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;

  const getRankDirection = () => {
    if (
      data &&
      data.data.chartMeterRanking.rankChange.changeDirection === "UP"
    ) {
      setRankRirection("up");
    } else if (
      data &&
      data.data.chartMeterRanking.rankChange.changeDirection === "DOWN"
    ) {
      setRankRirection("down");
    } else {
      setRankRirection("equal");
    }
  };

  return (
    <div className="top-movies">
      <div className="movies-container">
        {data &&
          data.data.map(
            ({
              id,
              titleText,
              releaseDate,
              primaryImage,
              plot,
              chartMeterRanking,
              titleCertificate,
              titleRuntime,
            }) => (
              <div
                key={id}
                className="movies-article"
                style={{
                  padding: "20px",
                }}
              >
                <h3>{titleText.text}</h3>
                <div className="movies-header">
                  <p>{releaseDate.year}</p>
                  {"-"}
                  <p>{titleCertificate.rating}</p>
                  {"-"}
                  {titleRuntime ? (
                    <p>{titleRuntime.seconds / 60} min</p>
                  ) : (
                    <p>NA</p>
                  )}
                </div>

                <img
                  className="poster"
                  src={primaryImage.imageUrl}
                  alt={`${titleText.text} poster`}
                />
                <div className="plot">
                  <p>{plot.plotText.plainText}</p>
                </div>
                <div className="rank">
                  <p>{chartMeterRanking.currentRank}</p>
                  {chartMeterRanking.rankChange.changeDirection === "UP" ? (
                    <ArrowUp id="up" />
                  ) : chartMeterRanking.rankChange.changeDirection ===
                    "DOWN" ? (
                    <DownUp id="down" />
                  ) : (
                    <Equal id="equal" />
                  )}
                  <p>from: {chartMeterRanking.rankChange.difference}</p>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default TopMovies;
