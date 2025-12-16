"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "./tiktokIcon";

const drawerWidth = 240;

const navItems = [
  { text: "Home", href: "/" },
  { text: "Shop", href: "/shop" },
  { text: "About Me", href: "/about" },
  { text: "Contact Me", href: "/contact" },
  { text: "Videos", href: "/videos" },
  { text: "Recipes", href: "/recipes" },
];

const secondaryItems = [
  { text: "My Favorites", href: "/" },
  { text: "Newsletter", href: "/appointment" },
];

const socialIcons = [
  {
    Icon: TikTokIcon,
    href: "https://www.tiktok.com/@slimandsavory",
    platform: "TikTok",
  },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/slimandsavory/",
    platform: "Instagram",
  },
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/SlimandSavory/",
    platform: "Facebook",
  },
  {
    Icon: YouTubeIcon,
    href: "https://www.youtube.com/@SlimSavory",
    platform: "YouTube",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen((p) => !p);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#E4DCC0" }}
    >
      <Image
        src="/images/shared/logo.png"
        alt="Logo"
        height={150}
        width={150}
        priority
      />
      <Divider sx={{ backgroundColor: "#1B1E1E" }} />
      <List sx={{ backgroundColor: "#E4DCC0" }}>
        {navItems.map((item) => (
          <ListItem key={item.text} sx={{ my: 3 }} disablePadding>
            <Link
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#1B1E1E",
                fontFamily: "Birds",
                fontSize: 24,
              }}
            >
              {item.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }} suppressHydrationWarning>
      <AppBar component="nav">
        {/* Top strip */}
        <Box
          sx={{
            backgroundColor: "#FFF5E1",
            height: 60,
            textAlign: "center",
            fontFamily: "Birds",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "85%",
              backgroundColor: "primary.light",
              height: "100%",
              display: "flex",
              fontFamily: "Birds",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                ml: { xl: "20em", md: "10em" },
                fontSize: 16,
                fontFamily: "Birds",
                color: "#1B1E1E",
              }}
            >
              Come check out my content I post weekly on my Social Medias!
            </Typography>
            <Link
              href="https://www.youtube.com/@SlimSavory"
              style={{ textDecoration: "none" }} // prevents default underline
              target="_blank" // optional
              rel="noopener noreferrer" // recommended for external links
            >
              <Typography
                sx={{
                  fontSize: 16,
                  mr: 1,
                  color: "#1B1E1E",
                  fontFamily: "Birds",
                  "&:hover": { cursor: "pointer", textDecoration: "underline" },
                }}
              >
                Check out my latest cooking tutorial!
              </Typography>
            </Link>
          </Box>

          <Box sx={{ width: 60, height: 60, flexShrink: 0 }}>
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 0,60 60,60" fill="#a0c49d" />
              <polygon points="0,0 60,0 60,60" fill="#7c8e76" />
            </svg>
          </Box>

          <Box
            sx={{
              width: "20%",
              backgroundColor: "black",
              height: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundColor: "primary.main",
                height: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {socialIcons.map(({ Icon, href, platform }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${platform} page`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    width: "8%",
                  }}
                >
                  <Box
                    component={Icon}
                    sx={{
                      height: "100%",
                      width: "100%",
                      color: "white",
                      transition: "all .2s ease",
                      "&:hover": {
                        color: "#373e02",
                        cursor: "pointer",
                      },
                    }}
                  />
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        <Toolbar sx={{ backgroundColor: "background.paper" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon sx={{ color: "#1B1E1E" }} />
          </IconButton>

          <Link href="/" style={{ display: "inline-flex" }}>
            <Image
              src="/images/shared/logo.png"
              alt="Logo"
              width={80}
              height={80}
              style={{ display: "none" }}
              priority
            />
          </Link>

          {/* Desktop menu */}
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              ml: "auto",
              mr: "auto",
              alignItems: "center",
            }}
          >
            {navItems.map((item, index) => (
              <Box
                key={item.href}
                sx={{
                  display: "flex",
                  alignItems: "space-around",
                  mx: 4,
                }}
              >
                {index !== 0 && (
                  <Box
                    sx={{
                      width: "1px",
                      height: "20px",
                      marginRight: "50px",
                      backgroundColor: "primary.dark",
                    }}
                  />
                )}
                <Link
                  href={item.href}
                  className="menu_link"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Birds",
                      textTransform: "none",
                      color: isActive(item.href)
                        ? "primary.main"
                        : "primary.dark",
                      textDecoration: "none",
                      transition: "all .3s ease",
                      "&:hover": { color: "primary.light" },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>

          {/* Secondary links */}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Box component="nav" sx={{ backgroundColor: "#E4DCC0" }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#E4DCC0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
