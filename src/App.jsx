// Apps
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import BackgroundImage from "./components/BackgroundImage";
import WeatherToolbar from "./components/WeatherWidget";

import Interests from "./components/Interests";
import SearchWidget from "./components/SearchWidget";

// Other
import "./styles/app.scss";
import FavoriteLinks from "./components/FavoriteLinks";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <BackgroundImage />
        <header>
          <WeatherToolbar />
          <p>user bar</p>
          <p>setting</p>
        </header>

        <SearchWidget />
        <FavoriteLinks />
        <Interests />
      </div>
    </QueryClientProvider>
  );
};

export default App;
