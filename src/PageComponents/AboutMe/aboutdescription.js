import React from "react";
import { Typography, Box, Button } from "@mui/material";
import LabelLogo from "../assets/LabelLogo.png";
import food2 from "../assets/food2.jpg";

const aboutdescription = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0em 3em",
        }}
      >
        <Box
          sx={{
            width: "50%",
            padding: "3em 0em",
            height: { xl: "90%", md: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          <Typography
            variant="p"
            sx={{ color: "primary.dark", fontWeight: "bold" }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "primary.dark", fontWeight: "bold" }}
          >
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "primary.dark", fontWeight: "bold" }}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "30vw",
            height: "70%",
            backgroundImage: `url(${food2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};
export default aboutdescription;
