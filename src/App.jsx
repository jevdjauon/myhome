import "./styles/app.scss";
import BackgroundImage from "./components/BackgroundImage";
import WeatherToolbar from "./components/WeatherToolbar";

const App = () => {
  return (
    <div className="app-container">
      <BackgroundImage />
      <header>
        <WeatherToolbar />
        <p>user bar</p>
        <p>setting</p>
      </header>
      <div>searhbar?</div>
      <div>favorite sites</div>
      <div>
        <h1>main</h1>
        <div>main navbar</div>
        <div>main dynamic content</div>
      </div>
    </div>
  );
};

export default App;
