import { Box, Modal } from "@mui/material";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import { Video } from "../../../models/Video";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { LATEST_KEYWORDS, VIDEO_INFOS } from "../../../constants/localStorage";
import { getSearchResult } from "../../../api/getSearchResult";
import { formatVideo } from "../../../utils/video";
import { MAX_STORE_KEYWORD_COUNT } from "../../../constants/classroom";
import Title from "../../base/Title";
import LatestKeywordList from "../LatestKeyword/LatestKeywordList";
import SavedVideoCount from "../SavedVideo/SavedVideoCount";
import { SearchResultList } from "../SearchResult";

type Props = {
  open: boolean;
  onClose: () => void;
  onSaveVideo: (savedVideoList: Video[]) => void;
};

const SearchModal = ({ open, onClose, onSaveVideo }: Props) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<Video[]>([]);
  const [savedVideoCount, setSavedVideoCount] = useState(0);
  const [latestKeywordList, setLatestKeywordList] = useLocalStorage<string[]>(
    LATEST_KEYWORDS,
    [],
  );
  const [savedVideoList, setSavedVideoList] = useLocalStorage<Video[]>(
    VIDEO_INFOS,
    [],
  );

  useEffect(() => {
    setSavedVideoCount(savedVideoList.length);
    onSaveVideo(savedVideoList);
  }, [setSavedVideoCount, onSaveVideo, savedVideoList]);

  const searchVideo = async (keyword: string) => {
    setKeyword(keyword);

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
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box
          onClick={onClose}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
        >
          <Close fontSize="medium" />
        </Box>
        <Title>🔎 유튜브 검색</Title>
        <SearchForm onSubmit={searchVideo} selectedKeyword={keyword} />
        <LatestKeywordList
          keywordList={latestKeywordList}
          onClickKeyword={searchVideo}
        />
        <SavedVideoCount savedVideoCount={savedVideoCount} />
        <SearchResultList
          results={results}
          savedVideoList={savedVideoList}
          onClickSaveButton={handleSaveVideo}
        />
      </Box>
    </Modal>
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
