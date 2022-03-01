import { Box, Typography } from "@mui/material";

type Props = {
  savedVideoCount: number;
};

const SavedVideoCountSection = ({ savedVideoCount }: Props) => {
  return (
    <Box>
      <Typography>저장된 영상 갯수: {savedVideoCount}/100</Typography>
    </Box>
  );
};

export default SavedVideoCountSection;
