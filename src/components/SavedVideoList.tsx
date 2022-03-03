import { Box } from "@mui/material";
import { Video } from "../models/Video";
import SavedVideoArticle from "./SavedVideoArticle";

type Props = {
  videoList: Video[];
  onClick: (newVideo: Video) => void;
};

const SavedVideoList = ({ videoList, onClick }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {videoList.map((aVideo, index) => {
        return (
          <SavedVideoArticle key={index} videoInfo={aVideo} onClick={onClick} />
        );
      })}
    </Box>
  );
};

export default SavedVideoList;
