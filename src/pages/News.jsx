// App
// import axios from "axios";
import { Link } from "react-router-dom";

// Test Data
import data from "../data/newsTestData.json";

// Other
import "../styles/news.scss";

// const options = {
//   method: "GET",
//   url: "https://newsdata2.p.rapidapi.com/news",
//   params: {
//     country: "us, gb, fr",
//     category: "sports, health, entertainment",
//     language: "en",
//     q: "title, image",
//   },
//   headers: {
//     "X-RapidAPI-Key": "a3dd6d81e5msh9406048f565d5b3p1cbc96jsn35ac2878db39",
//     "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

const News = () => {
  console.log(data.results);
  let newsData = data.results;

  return (
    <div className="news">
      {/* <h1>News</h1> */}
      {newsData &&
        newsData.map(
          ({ title, description, image_url, creator, content, link }) => {
            console.log(content.length);
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
