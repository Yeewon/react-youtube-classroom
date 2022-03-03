import { Box } from "@mui/material";
import { Video } from "../models/Video";
import Article from "./Article";
import StatusButtonList from "./StatusButtonList";

type Props = {
  videoInfo: Video;
  onClick: (newVideo: Video) => void;
  onSnackbar: (type: string) => void;
  onDelete: (videoId: string) => void;
};

const SavedVideoArticle = ({
  videoInfo,
  onClick,
  onSnackbar,
  onDelete,
}: Props) => {
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
        onDelete={onDelete}
      />
    </Box>
  );
};

export default SavedVideoArticle;
