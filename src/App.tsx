import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Classroom } from "@/components/domain/Classroom";
import theme from "@/styles/theme";
import Header from "@/components/base/Header";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Classroom />
      </ThemeProvider>
    </div>
  );
};

export default App;
