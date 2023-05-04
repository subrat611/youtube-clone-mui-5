import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { CategoryVideos } from "./index";
import { useParams } from "react-router-dom";
import AxiosApi from "../utils/api";

export default function SearchFeed() {
  const [videos, setvideos] = useState([]);
  const { searchItem } = useParams();

  useEffect(() => {
    AxiosApi(`search?part=snippet&q=${searchItem}`).then(({ data }) =>
      setvideos(data.items)
    );
  }, [searchItem]);

  return (
    <Box
      sx={{
        overflowY: "auto",
        minHeight: "100vh",
        maxHeight: "100%",
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
        Search result for <span style={{ color: "#cfcf" }}>{searchItem}</span>
      </Typography>

      {videos && <CategoryVideos videos={videos} />}
    </Box>
  );
}
