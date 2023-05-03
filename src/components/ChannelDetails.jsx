import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ChannelCard, CategoryVideos } from "./index";
import AxiosApi from "../utils/api";

export default function ChannelDetails() {
  const [channelDetails, setChannelDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    AxiosApi(`channels?part="snippet&id=${id}`).then(({ data }) =>
      setChannelDetails(data?.items[0])
    );

    AxiosApi(`search?channelId=${id}&part=snippet&order=date`).then(
      ({ data }) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box
        sx={{
          height: "250px",
          width: "100%",
        }}
      >
        <img
          src={`${channelDetails?.brandingSettings?.image?.bannerExternalUrl}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt="banner"
        />
      </Box>
      <ChannelCard
        channelData={channelDetails}
        flexDir="row"
        channelLogoH="140px"
        channelLogoW="140px"
        channelLogoTextMargin="15px"
      />
      <Box>
        <Box>
          <CategoryVideos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
}
