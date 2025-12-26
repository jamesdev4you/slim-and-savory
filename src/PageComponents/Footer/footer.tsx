"use client";

import Link from "next/link";
import { Typography, Box } from "@mui/material";

const colWidth = {
  xl: "20%",
  lg: "20%",
  md: "50%",
  sm: "50%",
  xs: "90%",
};

const FooterLink = ({ children, href }) => (
  <Typography
    component="a"
    href={href}
    sx={{
      fontFamily: "Birds",
      textTransform: "none",
      color: "white",
      transition: "all .1s ease",
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        color: "primary.light",
        textDecoration: "underline",
      },
    }}
  >
    {children}
  </Typography>
);

const Footer = ({ footer }) => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "primary.main" }}>
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          py: 3,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
          color: "background.default",
        }}
      >
        {/* Pages */}
        <Box
          sx={{
            width: colWidth,
            p: 3,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Birds", mb: 2, borderBottom: "1px solid white" }}
          >
            Pages
          </Typography>

          <FooterLink href="/">Home</FooterLink>

          <FooterLink href="/shop">Shop</FooterLink>

          <FooterLink href="/about">About Me</FooterLink>

          <FooterLink href="/contact">Contact Me</FooterLink>

          <FooterLink href="/recipes">Recipes</FooterLink>

          <FooterLink href="/videos">Videos</FooterLink>
        </Box>

        {/* Explore */}
        <Box
          sx={{
            width: colWidth,
            p: 3,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Birds", mb: 2, borderBottom: "1px solid white" }}
          >
            Explore
          </Typography>

          {footer?.exploreItems?.length ? (
            footer.exploreItems.map((item, idx) => (
              <FooterLink
                key={`${item?.title || "explore"}-${idx}`}
                href="/recipes"
              >
                {item?.title}
              </FooterLink>
            ))
          ) : (
            // optional fallback if nothing is set in CMS yet
            <>
              <FooterLink href="/recipes">High Protein</FooterLink>
              <FooterLink href="/recipes">Low Carb</FooterLink>
              <FooterLink href="/recipes">Gluten Free</FooterLink>
              <FooterLink href="/recipes">Cooking Videos</FooterLink>
            </>
          )}
        </Box>

        {/* Contact (CMS) */}
        <Box
          sx={{
            width: colWidth,
            p: 3,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Birds", mb: 2, borderBottom: "1px solid white" }}
          >
            Contact
          </Typography>

          {footer?.contactEmail && (
            <FooterLink href={`mailto:${footer?.contactEmail}`}>
              {footer?.contactEmail}
            </FooterLink>
          )}
        </Box>

        {/* Follow Along (CMS) */}
        <Box
          sx={{
            width: colWidth,
            p: 3,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Birds", mb: 2, borderBottom: "1px solid white" }}
          >
            Follow Along
          </Typography>

          {footer?.socialLinks?.map((link) => (
            <FooterLink key={link.url} href={link.url}>
              {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
            </FooterLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
