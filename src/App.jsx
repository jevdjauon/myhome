// Apps
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import BackgroundImage from "./components/BackgroundImage";
import WeatherToolbar from "./components/WeatherWidget";
import TimeWidget from "./components/TimeWidget";
import Interests from "./components/Interests";

// Other
import "./styles/app.scss";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
        <Interests />
      </div>
    </QueryClientProvider>
  );
};

export default App;
