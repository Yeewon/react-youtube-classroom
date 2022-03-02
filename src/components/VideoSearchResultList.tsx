import { Box } from "@mui/material";
import { Video } from "../models/Video";
import VideoSearchResult from "./VideoSearchResult";

type Props = {
  searchResultList: Video[];
  savedVideoList: Video[];
  onClickSaveButton: object;
};

const VideoSearchResultList = ({
  searchResultList,
  savedVideoList,
  onClickSaveButton,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {searchResultList.map((searchResult, index) => {
        const isSaved: boolean = !!savedVideoList.filter(
          savedVideo => savedVideo.videoId === searchResult.videoId,
        ).length;

        return (
          <VideoSearchResult
            key={index}
            videoInfo={searchResult}
            initialState={isSaved}
            onClickSaveButton={onClickSaveButton}
          />
        );
      })}
    </Box>
  );
};

export default VideoSearchResultList;
