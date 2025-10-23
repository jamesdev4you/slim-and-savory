import React from "react";
import NavBar from "../NavBar/navbar.js";
import Footer from "../Footer/footer.js";
import ContactHeader from "./contactheader.js";
import ContactForm from "./contactform/contactpage.js";
import { Box } from "@mui/material";

const contactme = () => {
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
      <ContactHeader />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "secondary.main",
        }}
      />
      <ContactForm />
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
export default contactme;
