import { Box, Stack } from "@mui/material";
import PropTypes from "prop-types";

import { VideoCard, ChannelCard } from "./index";

export default function CategoryVideos({ videos }) {
  return (
    <Stack flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelData={item} />}
        </Box>
      ))}
    </Stack>
  );
}

CategoryVideos.propTypes = {
  videos: PropTypes.array.isRequired,
};
