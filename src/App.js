import Booking from "./components/Booking";
import FlightStatus from "./components/FlightStatus";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchFlight from "./components/SearchFlight";
import "./App.css";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme";
import Corousel from "./components/Corousel";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box>
          <Booking />
          <FlightStatus />
          <SearchFlight />
          <Corousel />
        </Box>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
