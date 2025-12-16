import React from "react";
import { Box } from "@mui/material";
import { StyledAnimatedButton } from "../Styled/styledButtons.js";
import Image from "next/image";
import Link from "next/link";

const HomeHeader = ({ headerData }) => {
  if (!headerData?.items) return null;

  console.log("HEADER DATA:", headerData);

  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "60vh", xl: "100vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: "64px",
      }}
    >
      <Box
        sx={{
          width: { xl: "80%", md: "100%", sm: "95%", xs: "95%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: { md: "70%", lg: "100%" },
          gap: 4,
        }}
      >
        {headerData.items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "20%",
              height: "70%",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            {/* Optimized Next Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
            />

            {/* Button */}
            <Box
              sx={{
                position: "absolute",
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                href={item.link}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  height: "100%",
                }}
              >
                <StyledAnimatedButton>{item.title}</StyledAnimatedButton>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeHeader;
