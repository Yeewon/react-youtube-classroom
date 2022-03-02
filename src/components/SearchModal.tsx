import { Box } from "@mui/material";
import Title from "./Title";
import SearchForm from "./SearchForm";
import LatestKeywordList from "./LatestKeywordList";
import SavedVideoCountSection from "./SavedVideoCountSection";
import VideoSearchResultList from "./VideoSearchResultList";
import { useState } from "react";
import { Video } from "../models/Video";
import { getSearchResult } from "../api/getSearchResult";
import { formatVideo } from "../utils/video";
import useLocalStorage from "../hooks/useLocalStorage";
import { MAX_STORE_KEYWORD_COUNT } from "../constants/classroom";

const SearchModal = () => {
  const [results, setResults] = useState<Video[]>([]);
  const [savedVideoCount, setSavedVideoCount] = useState(0);
  const [latestKeywordList, setLatestKeywordList] = useLocalStorage<string[]>(
    "latestKeywordList",
    [],
  );
  const [savedVideoList, setSavedVideoList] = useLocalStorage<Video[]>(
    "savedVideoList",
    [],
  );

  const handleSubmit = async (keyword: string) => {
    const { items } = await getSearchResult(keyword);
    const formattedResults = formatVideo(items);
    setResults(formattedResults);
    updateLatestKeywordList(keyword);
  };

  const handleSaveVideo = (targetVideo: Video, isSaved: boolean) => {
    let newVideoList = [...savedVideoList];

    if (isSaved) {
      newVideoList = [
        ...newVideoList,
        {
          ...targetVideo,
          status: {
            isWatched: false,
            isLiked: false,
          },
        },
      ];
    } else {
      newVideoList = newVideoList.filter(
        video => video.videoId !== targetVideo.videoId,
      );
    }

    setSavedVideoList(newVideoList);
  };

  const updateLatestKeywordList = (newKeyword: string) => {
    let newKeywordList = [...latestKeywordList];
    const targetIndex = newKeywordList.indexOf(newKeyword);

    targetIndex > -1 && newKeywordList.splice(targetIndex, 1);
    newKeywordList =
      newKeywordList.length >= MAX_STORE_KEYWORD_COUNT
        ? newKeywordList.slice(0, MAX_STORE_KEYWORD_COUNT - 1)
        : newKeywordList;

    setLatestKeywordList([newKeyword, ...newKeywordList]);
  };

  return (
    <Box sx={style}>
      <Title>🔎 유튜브 검색</Title>
      <SearchForm onSubmit={handleSubmit} />
      <LatestKeywordList keywordList={latestKeywordList} />
      <SavedVideoCountSection savedVideoCount={savedVideoCount} />
      <VideoSearchResultList
        searchResultList={results}
        savedVideoList={savedVideoList}
        onClickSaveButton={handleSaveVideo}
      />
    </Box>
  );
};

const style = {
  position: "absolute",
  width: "90%",
  height: "90%",
  top: "50%",
  left: "50%",
  boxSizing: "border-box",
  margin: "auto",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export default SearchModal;
