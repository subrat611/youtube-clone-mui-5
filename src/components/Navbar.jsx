import { Stack, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import { SearchBar } from "../components";

import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Navbar() {
  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        p={2}
        sx={{
          position: "sticky",
          top: 0,
          background: "#000",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <YouTubeIcon
            sx={{
              color: "#f44336",
              marginRight: 0.5,
              fontSize: 40,
            }}
          />
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            YouTube
          </Typography>
        </Link>
        <SearchBar />
      </Stack>
      <Outlet />
    </>
  );
}
