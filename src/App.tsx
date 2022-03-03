import { Box } from "@mui/material";
import React, { useState } from "react";
import FilterButtonList from "./components/FIlterButtonList";
import SavedVideoList from "./components/SavedVideoList";
import Title from "./components/Title";
import useLocalStorage from "./hooks/useLocalStorage";
import { Video } from "./models/Video";

const App = () => {
  const [initialState] = useLocalStorage<Video[]>("savedVideoList", []);
  const [videoList, setVideoList] = useState<Video[]>(initialState);

  const onSaveVideo = (savedVideoList: Video[]) => {
    setVideoList(savedVideoList);
  };

  const handleClickStatusButton = (newVideo: Video) => {
    const newVideoList = videoList.map(aVideo =>
      aVideo.videoId === newVideo.videoId ? newVideo : aVideo,
    );
    setVideoList(newVideoList);
  };

  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <Title>👩🏻‍💻 예원의 유튜브 강의실 👨🏻‍💻</Title>
      <FilterButtonList onSaveVideo={onSaveVideo} />
      <SavedVideoList videoList={videoList} onClick={handleClickStatusButton} />
    </Box>
  );
};

export default App;
