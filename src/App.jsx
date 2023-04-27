import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
      <p>Youtube Clone with MUI-5</p>
      <Routes>
        <Route path="/" element={<h1>NavBar</h1>} />
      </Routes>
    </Box>
  );
}

export default App;
