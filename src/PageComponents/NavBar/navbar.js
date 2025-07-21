import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/Logo.png";
import "../../navlink.css";
import "../../index.css";
import { Outlet } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const drawerWidth = 240;
const navItems = [
  { text: "Home", href: "/" },
  { text: "Shop", href: "/shop" },
  { text: "About Me", href: "/aboutme" },
  { text: "Contact Me", href: "/contactme" },
  { text: "Press", href: "/press" },
];

const icons = [FacebookIcon, LinkedInIcon, YouTubeIcon, InstagramIcon];

const secondaryItems = [
  { text: "My Favorites", href: "/" },
  { text: "Newsletter", href: "/appointment" },
];

export default function NavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#E4DCC0" }}
    >
      <img src={Logo} alt="yooo" style={{ height: "150px", width: "150px" }} />
      <Divider sx={{ backgroundColor: "#1B1E1E" }} />
      <List sx={{ backgroundColor: "#E4DCC0" }}>
        {navItems.map((item) => (
          <ListItem key={item.text} sx={{ margin: "30px 0px" }} disablePadding>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#1B1E1E",
                fontFamily: "Birds",
                fontSize: "24px",
                margin: "auto",
                "&:hover": {
                  cursor: "pointer",
                  color: "#7c8e76",
                },
              }}
              to={item.href}
            >
              {item.text}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar component="nav">
        <Box
          sx={{
            backgroundColor: "#FFF5E1",
            height: "60px",
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
                marginLeft: { xl: "20em", md: "10em" },
                fontSize: "16px",
                fontFamily: "Birds",
                color: "#1B1E1E",
              }}
            >
              Come check out my content I post weekly on my Social Medias!{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                marginRight: "1em",
                color: "#1B1E1E",
                fontFamily: "Birds",
                "&:hover": { cursor: "pointer", textDecoration: "underline" },
              }}
            >
              Join my Newsletter to stay up to date!{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "60px",
              height: "60px",
              flexShrink: 0,
            }}
          >
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
              {icons.map((Icon, index) => (
                <Icon
                  key={index}
                  sx={{
                    height: "100%",
                    width: "10%",
                    color: "white",
                    transition: "all .2s ease",
                    "&:hover": { cursor: "pointer", color: "#373e02" },
                  }}
                />
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
          <NavLink to={"/"}>
            <Box
              alt="yooo"
              sx={{
                display: { sm: "none", md: "block" },
                height: "80px",
                width: "80px",
                marginLeft: {
                  xs: "auto",
                  sm: "auto",
                  md: "0",
                  lg: "0",
                  xl: "0",
                },
                backgroundImage: `url(${Logo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </NavLink>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              marginLeft: "auto",
              alignItems: "center",
            }}
          >
            {navItems.map((item, index) => (
              <Box
                key={item.href}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mx: 4, // ✅ Equal spacing on both sides of the whole unit
                }}
              >
                {/* Divider – only if not the first item */}
                {index !== 0 && (
                  <Box
                    sx={{
                      width: "1px",
                      height: "24px",
                      backgroundColor: "primary.dark",
                      marginRight: 2, // space between line and link
                    }}
                  />
                )}

                {/* NavLink */}
                <NavLink className="menu_link" to={item.href}>
                  <Typography
                    sx={{
                      fontFamily: "Birds",
                      textTransform: "none",
                      color: "primary.dark",
                      textDecoration: "none",
                      transition: "all .3s ease",
                      "&:hover": {
                        color: "primary.light",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </NavLink>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              marginLeft: "auto",
            }}
          >
            {secondaryItems.map((item) => (
              <NavLink
                key={item.href}
                className="menu_link"
                style={{
                  fontFamily: "Birds",
                  textTransform: "none",
                  fontSize: "12px",
                  textDecoration: "underline",
                  transition: "all .3s ease",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                to={item.href}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ backgroundColor: "#E4DCC0" }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
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

      <Outlet />
    </Box>
  );
}
