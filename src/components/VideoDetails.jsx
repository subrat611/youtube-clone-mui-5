import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

import { CategoryVideos } from "./index.js";
import AxiosApi from "../utils/api";

export default function VideoDetails() {
  const { id } = useParams();
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    AxiosApi(`videos?part=snippet,statistics&id=${id}`).then(({ data }) =>
      setvideoDetail(data.items[0])
    );

    AxiosApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      ({ data }) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail || !videos) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxHeight: "100%",
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{
                    sm: "subtitle1",
                    md: "h6",
                  }}
                >
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography varient="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography varient="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        mt={5}
        justifyContent="center"
        alignItems="center"
      >
        <CategoryVideos videos={videos} />
      </Box>
    </Box>
  );
}
