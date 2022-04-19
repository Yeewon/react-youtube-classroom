import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Classroom } from "@/components/domain/Classroom";
import theme from "@/styles/theme";
import Header from "@/components/base/Header";
import { FilterProvider } from "./contexts/FilterContext";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <FilterProvider>
          <Classroom />
        </FilterProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
