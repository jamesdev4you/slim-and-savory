import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: "Birds, system-ui, -apple-system, Segoe UI, Roboto",

    h6: {
      fontWeight: 500,
      fontSize: "1.05rem", // 20px
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#7c8e76",
      light: "#a0c49d",
      dark: "#373e02",
    },
    secondary: {
      main: "#f7ffe5",
    },
    background: {
      default: "#f1f1f1",
    },
  },
});

export default theme;
