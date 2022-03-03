import { Box } from "@mui/material";
import { Video } from "../models/Video";
import Article from "./Article";
import StatusButtonList from "./StatusButtonList";

type Props = {
  videoInfo: Video;
  onClick: (newVideo: Video) => void;
};

const SavedVideoArticle = ({ videoInfo, onClick }: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "180px",
        m: 0.5,
      }}
    >
      <Article videoInfo={videoInfo} />
      <StatusButtonList video={videoInfo} onClick={onClick} />
    </Box>
  );
};

export default SavedVideoArticle;
