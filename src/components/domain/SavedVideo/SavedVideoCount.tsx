import { Box, Typography } from "@mui/material";

type Props = {
  savedVideoCount: number;
};

const SavedVideoCount = ({ savedVideoCount }: Props) => {
  return (
    <Box
      id="saved-video-count"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Typography>저장된 영상 갯수: {savedVideoCount}/100</Typography>
    </Box>
  );
};

export default SavedVideoCount;
