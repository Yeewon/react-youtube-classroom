import { Typography } from "@mui/material";
import React from "react";

type Props = {
  name: string;
};

const Title = ({ name }: Props) => {
  return (
    <Typography
      align="center"
      variant="h5"
      sx={{
        fontWeight: "bold",
      }}
    >
      👩🏻‍💻 {name}의 유튜브 강의실 👨🏻‍💻
    </Typography>
  );
};

Title.defaultProps = {
  name: "",
};

export default Title;
