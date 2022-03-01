import { Box } from "@mui/material";
import Title from "./Title";
import SearchForm from "./SearchForm";
import LatestKeywordList from "./LatestKeywordList";
import SavedVideoCountSection from "./SavedVideoCountSection";
import VideoSearchResultList from "./VideoSearchResultList";
import { useState } from "react";

const SearchModal = () => {
  const [results, setResults] = useState([]);

  return (
    <Box sx={style}>
      <Title>🔎 유튜브 검색</Title>
      <SearchForm />
      <LatestKeywordList keywordList={["여름", "겨울", "가을"]} />
      <SavedVideoCountSection savedVideoCount={5} />
      <VideoSearchResultList searchResultList={results} />
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
