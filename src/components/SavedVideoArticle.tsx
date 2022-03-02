import { Box } from "@mui/material";
import { Video } from "../models/Video";
import Article from "./Article";
import StatusButtonList from "./StatusButtonList";

type Props = {
  videoInfo: Video;
};

const SavedVideoArticle = ({ videoInfo }: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "180px",
        m: 0.5,
      }}
    >
      <Article videoInfo={videoInfo} />
      <StatusButtonList />
    </Box>
  );
};

export default SavedVideoArticle;
