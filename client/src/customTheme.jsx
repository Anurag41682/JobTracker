import { createTheme } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
const theme = createTheme({
  palette: {
    background: {
      default: "#f7f7f7",
    },

    primary: {
      50: "#f1fff5",
      100: "#e3ffec",
      200: "#c7ffd9",
      300: "#abffc5",
      400: "#8fffb2",
      500: "#73ff9f", // Main primary color
      600: "#51b36f",
      700: "#3a8050",
      800: "#224c30",
      900: "#0b1910",
    },
  },
  //pixel
  spacing: 4,
  // second way to responsive font-size
  //sx={{ typography: { sm: 'body1', xs: 'body2' }
  typography: {
    body1: {
      fontSize: "1rem", // Default font size for body text
    },
    body2: {
      fontSize: "1.3rem",
    },
  },
  // breakpoints: createTheme().breakpoints,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#3a8050",
          "--TextField-brandBorderHoverColor": "#3a8050",
          "--TextField-brandBorderFocusedColor": "#51b36f",
          "& label.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "var(--TextField-brandBorderColor)",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:before, &:after": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&:before": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#51b36f",
          },
        },
      },
    },
  },
});
// one way to responsive font-size
// theme.typography.h3 = {
//   fontSize: "1.2rem",
//   "@media (min-width:600px)": {
//     fontSize: "1.5rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "2.4rem",
//   },
// };

export default theme;
