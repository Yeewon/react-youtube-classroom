import { Box } from "@mui/material";
import { Video } from "../models/Video";
import VideoSearchResult from "./VideoSearchResult";

type Props = {
  searchResultList: Video[];
};

const VideoSearchResultList = ({ searchResultList }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {searchResultList.map((searchResult, index) => (
        <VideoSearchResult key={index} videoInfo={searchResult} />
      ))}
    </Box>
  );
};

export default VideoSearchResultList;
