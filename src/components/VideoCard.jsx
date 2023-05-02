import { Card, CardContent, Typography, CardMedia } from "@mui/material";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  const { videoId } = video.id;
  const { snippet } = video;

  return (
    <Card
      sx={{
        width: 350,
        my: 2,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : "/404"}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: "100%",
            height: 180,
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#000",
          height: "100px",
          width: "100%",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : "/404"}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            sx={{
              width: "100%",
              wordBreak: "break-all",
              mt: 1,
            }}
          >
            {snippet?.title.slice(0, 50) || "Demo"}
          </Typography>
        </Link>
        <Link
          to={snippet?.channelId ? `/channel/${snippet?.channelId}` : "/404"}
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || "Demo"}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

VideoCard.propTypes = {
  video: PropTypes.object,
};
