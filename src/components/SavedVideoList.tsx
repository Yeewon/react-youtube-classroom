import { Box } from "@mui/material";
import { Video } from "../models/Video";
import SavedVideoArticle from "./SavedVideoArticle";

type Props = {
  videoList: Video[];
};

const SavedVideoList = ({ videoList }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {videoList.map((aVideo, index) => {
        return <SavedVideoArticle key={index} videoInfo={aVideo} />;
      })}
    </Box>
  );
};

export default SavedVideoList;
