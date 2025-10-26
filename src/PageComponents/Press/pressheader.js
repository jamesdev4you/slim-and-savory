"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ShopButton } from "../Styled/styledButtons";

const PressHeader = ({ activeSection, setActiveSection, pressSections }) => {
  return (
    <Box
      sx={{
        mt: "3em",
        height: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ mt: "1em", mb: ".2em", color: "primary.dark" }}
      >
        Don't Feel Left Out!
      </Typography>
      <Typography variant="h4" sx={{ color: "primary.dark", mb: "2em" }}>
        Come Check Out Some of My Favorite Things!
      </Typography>
      <Box
        sx={{
          height: "auto",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {pressSections.map((section) => (
          <ShopButton
            key={section}
            active={activeSection === section}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </ShopButton>
        ))}
      </Box>
    </Box>
  );
};
export default PressHeader;
