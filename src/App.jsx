import "./styles/app.scss";
import BackgroundImage from "./components/BackgroundImage";
import WeatherToolbar from "./components/WeatherWidget";
import TimeWidget from "./components/TimeWidget";

const App = () => {
  return (
    <div className="app-container">
      <BackgroundImage />
      <header>
        <TimeWidget />
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
