import React from "react";
import { Typography, Box, Button, Link } from "@mui/material";
import ContactForm from "./contactForm";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import food1 from "../../assets/food1.jpg";
const icons = [FacebookIcon, LinkedInIcon, YouTubeIcon, InstagramIcon];

const contactpage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center",
        backgroundColor: "secondary.main",
        paddingTop: "50px",
        padding: "2em",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0em 3em",
          }}
        >
          <Box
            sx={{
              width: "50%",

              height: { xl: "90%", md: "100%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <Typography variant="h4" sx={{ color: "primary.dark" }}>
              Learn More About
            </Typography>
            <Typography variant="h3" sx={{ color: "primary.dark" }}>
              Suzie Aragon
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "10px", color: "primary.dark" }}
            >
              Join Suzie Aragon's Newsletter and be the first to
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "10px", color: "primary.dark" }}
            >
              know when her innovative cookbook arrives!
            </Typography>

            <Box
              sx={{
                width: { xl: "40%", md: "60%" },
                height: { xl: "15%", md: "20%" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {icons.map((Icon, index) => (
                <Icon
                  key={index}
                  sx={{
                    height: "50%",
                    width: "auto",
                    color: "white",
                    backgroundColor: "primary.dark",
                    borderRadius: "50%",
                    padding: "10px",
                    "&:hover": {
                      cursor: "pointer",
                      color: "primary.light",
                      borderWidht: "1px",
                      borderStyle: "solid",
                      borderColor: "primary.light",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: "70%",
              gap: "1em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "100%",
                  lg: "100%",
                  md: "100%",
                  sm: "90%",
                  xs: "100%",
                },
                height: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: {
                  xl: "0px",
                  lg: "0px",
                  md: "50px",
                  sm: "50px",
                  xs: "50px",
                },
                marginTop: {
                  xl: "0px",
                  lg: "0px",
                  md: "50px",
                  sm: "50px",
                  xs: "50px",
                },
              }}
            >
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default contactpage;
