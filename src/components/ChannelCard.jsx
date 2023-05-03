import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ChannelCard({ channelData }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xs: "356px",
          md: "350px",
        },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${channelData?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelData?.snippet?.thumbnails?.high?.url}
            alt={channelData?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
            }}
          />
          <Typography variant="h6">{channelData?.snippet?.title}</Typography>
        </CardContent>
      </Link>
    </Box>
  );
}

ChannelCard.propTypes = {
  channelData: PropTypes.array,
};
