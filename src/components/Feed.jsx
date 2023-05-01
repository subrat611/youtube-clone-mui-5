import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { SideBar, Videos } from "./index";

export default function Feed() {
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
        <SideBar />
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
          New Videos
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  );
}
