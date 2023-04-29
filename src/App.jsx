import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  ChannelDetails,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetails,
} from "./components";

function App() {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchItem" element={<SearchFeed />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
