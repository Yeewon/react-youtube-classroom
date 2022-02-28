import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EFEFEF",
      contrastText: "#000000",
    },
    secondary: {
      main: "#1DBDD4",
      light: "#B5EBF2",
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: [
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      "system-ui",
      "Roboto",
      "Helvetica Neue",
      "Segoe UI",
      "Apple SD Gothic Neo",
      "Noto Sans KR",
      "Malgun Gothic",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#EFEFEF",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          borderRadius: 4,
        },
        sizeMedium: {
          borderRadius: 4,
        },
        sizeLarge: {
          borderRadius: 4,
        },
      },
    },
  },
});

export default theme;
