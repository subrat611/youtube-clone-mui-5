import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { SideBar, Videos } from "./index";
import AxiosApi from "../utils/api";

export default function Feed() {
  const [selectedCategory, setselectedCategory] = useState("Home");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    AxiosApi(`search?part=snippet&q=${selectedCategory.toLowerCase()}`).then(
      (data) => setvideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92.4vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setselectedCategory}
        />
      </Box>

      <Box
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          m={2}
          sx={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          {selectedCategory} Videos
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
