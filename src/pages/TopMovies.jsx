import { Link } from "react-router-dom";

import moviesData from "../data/imdbTestData.json";

const TopMovies = () => {
  const movies = moviesData.results;
  console.log(movies);

  return (
    <div>
      <h1>Movies</h1>
      {movies &&
        movies.map(({ rank, url, img, crew, title, gross, weekend, weeks }) => (
          <div
            key={rank}
            className="movies-article"
            style={{
              padding: "20px",
            }}
          >
            <h3>
              <span>{rank} </span>
              {title}
            </h3>
            <img src={img} alt={`${title} image`} />
            <p>{crew}</p>
            <Link to={url}>More On IMDB</Link>
          </div>
        ))}
    </div>
  );
};

export default TopMovies;
