import { Box, Typography } from "@mui/material";

type Props = {
  savedVideoCount: number;
};

const SavedVideoCountSection = ({ savedVideoCount }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Typography>저장된 영상 갯수: {savedVideoCount}/100</Typography>
    </Box>
  );
};

export default SavedVideoCountSection;
