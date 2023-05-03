import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ChannelCard({
  channelData,
  flexDir = "column",
  channelLogoH = "180px",
  channelLogoW = "180px",
  channelLogoTextMargin = "0px",
}) {
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
            flexDirection: {
              md: flexDir,
              xs: "column",
            },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelData?.snippet?.thumbnails?.high?.url}
            alt={channelData?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: channelLogoH,
              width: channelLogoW,
              mb: 2,
            }}
          />
          <Typography variant="h6" marginLeft={channelLogoTextMargin}>
            {channelData?.snippet?.title}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
}

ChannelCard.propTypes = {
  channelData: PropTypes.object,
  flexDir: PropTypes.string,
  channelLogoH: PropTypes.string,
  channelLogoW: PropTypes.string,
  channelLogoTextMargin: PropTypes.string,
};
