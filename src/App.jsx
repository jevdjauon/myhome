import "./styles/app.scss";
import BackgroundImage from "./components/BackgroundImage";

const App = () => {
  return (
    <div className="app-container">
      <BackgroundImage />
      <h1>MyHome</h1>
      <div>
        <h1>navbar</h1>
        <p>weather</p>
        <p>user bar</p>
        <p>setting</p>
      </div>
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
