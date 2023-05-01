import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "Home";

export default function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        flexDirection: {
          md: "column",
        },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#fcfcfc3a",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span>{category.icon}</span>
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#ccc",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}
