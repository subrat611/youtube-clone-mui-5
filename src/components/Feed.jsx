import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";

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
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <SideBar />
        <Typography
          sx={{
            mt: 1.5,
            color: "#fff",
          }}
        >
          Copyright 2023 youtube clone
        </Typography>
      </Box>
    </Stack>
  );
}
