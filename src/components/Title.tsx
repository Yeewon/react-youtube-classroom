import { Typography } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return (
    <Typography
      align="center"
      variant="h5"
      sx={{
        mt: 5,
        fontWeight: "bold",
      }}
    >
      {children}
    </Typography>
  );
};

export default Title;
