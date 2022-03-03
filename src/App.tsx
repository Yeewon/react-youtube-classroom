import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterButtonList from "./components/FIlterButtonList";
import SavedVideoList from "./components/SavedVideoList";
import Title from "./components/Title";
import useLocalStorage from "./hooks/useLocalStorage";
import { Video } from "./models/Video";

const App = () => {
  const [displayOption, setDisplayOption] = useState("toWatch");
  const [videoList, setVideoList] = useLocalStorage<Video[]>(
    "savedVideoList",
    [],
  );
  const [displayVideoList, setDisplayVideoList] = useState(videoList);

  useEffect(() => {
    filterVideo(displayOption);
  }, [videoList]);

  const filterVideo = (option: string) => {
    let newVideoList: Video[] = [];
    if (option === "toWatch") {
      newVideoList = videoList.filter(({ status }) => !status.isWatched);
    }
    if (option === "watched") {
      newVideoList = videoList.filter(({ status }) => status.isWatched);
    }
    if (option === "liked") {
      newVideoList = videoList.filter(({ status }) => status.isLiked);
    }
    setDisplayVideoList(newVideoList);
  };

  const handleDisplay = (option: string) => {
    filterVideo(option);
    setDisplayOption(option);
  };

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
      <FilterButtonList
        display={displayOption}
        onSaveVideo={onSaveVideo}
        onDisplay={handleDisplay}
      />
      <SavedVideoList
        videoList={displayVideoList}
        onClick={handleClickStatusButton}
      />
    </Box>
  );
};

export default App;
