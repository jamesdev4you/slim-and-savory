import React from "react";
import NavBar from "../NavBar/navbar.js";
import Footer from "../Footer/footer.js";
import { Box } from "@mui/material";

const press = () => {
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "secondary.main",
        }}
      />
      <Footer />
    </div>
  );
};
export default press;
