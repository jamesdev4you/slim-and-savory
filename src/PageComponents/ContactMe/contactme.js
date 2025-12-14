"use client";
import React from "react";
import ContactHeader from "./contactheader.js";
import ContactForm from "./contactform/contactpage.js";
import { Box } from "@mui/material";

const ContactMe = ({ headerData, contactContent }) => {
  return (
    <div>
      <ContactHeader data={headerData} />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "secondary.main",
        }}
      />
      <ContactForm {...contactContent} />
    </div>
  );
};
export default ContactMe;
