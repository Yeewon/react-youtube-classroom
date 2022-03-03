import { Box } from "@mui/material";
import { Video } from "../models/Video";
import Article from "./Article";
import StatusButtonList from "./StatusButtonList";

type Props = {
  videoInfo: Video;
  onClick: (newVideo: Video) => void;
  onSnackbar: (type: string) => void;
};

const SavedVideoArticle = ({ videoInfo, onClick, onSnackbar }: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "180px",
        m: 0.5,
      }}
    >
      <Article videoInfo={videoInfo} />
      <StatusButtonList
        video={videoInfo}
        onClick={onClick}
        onSnackbar={onSnackbar}
      />
    </Box>
  );
};

export default SavedVideoArticle;
