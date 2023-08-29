// Apps
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import BackgroundImage from "./components/BackgroundImage";
import Interests from "./components/Interests";

// Other
import "./styles/app.scss";
import FavoriteLinks from "./components/FavoriteLinks";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <BackgroundImage />
        <Header />
        <FavoriteLinks />
        <Interests />
      </div>
    </QueryClientProvider>
  );
};

export default App;
