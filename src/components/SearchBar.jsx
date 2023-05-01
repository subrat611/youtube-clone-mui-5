import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 10,
        border: "1px solid #717171",
        backgroundColor: "#000",
        outline: "none",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 10 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value=""
        onChange={() => {}}
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "1rem",
        }}
      />
      <IconButton
        sx={{
          backgroundColor: "rgba(255,255,255,0.2)",
          color: "#fff",
          borderStartStartRadius: 0,
          borderBottomLeftRadius: 0,
          ":hover": {
            background: " rgba(255,255,255,0.2)",
          },
        }}
        type="submit"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
