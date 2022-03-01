import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StatusButtonList = () => {
  const StatusButton = styled.span`
    cursor: pointer;
    margin-left: 7px;
  `;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <StatusButton>✅</StatusButton>
      <StatusButton>👍🏻</StatusButton>
      <StatusButton>🗑</StatusButton>
    </Box>
  );
};

export default StatusButtonList;
