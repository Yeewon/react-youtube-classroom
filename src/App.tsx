import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterButtonList from "./components/domain/ButtonList/FIlterButtonList";
import Title from "./components/base/Title";
import { VIDEO_INFOS } from "./constants/localStorage";
import useLocalStorage from "./hooks/useLocalStorage";
import { Video } from "./models/Video";
import SavedVideoList from "./components/domain/SavedVideo/SavedVideoList";
import { LIKED, TO_WATCH, WATCHED } from "./constants/classroom";

const App = () => {
  const [displayOption, setDisplayOption] = useState("toWatch");
  const [videoList, setVideoList] = useLocalStorage<Video[]>(VIDEO_INFOS, []);
  const [displayVideoList, setDisplayVideoList] = useState(videoList);

  useEffect(() => {
    filterVideo(displayOption);
  }, [videoList]);

  const filterVideo = (option: string) => {
    let newVideoList: Video[] = [];
    if (option === TO_WATCH) {
      newVideoList = videoList.filter(({ status }) => !status.isWatched);
    }
    if (option === WATCHED) {
      newVideoList = videoList.filter(({ status }) => status.isWatched);
    }
    if (option === LIKED) {
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

  const onDeleteVideo = (videoId: string) => {
    const newVideoList = videoList.filter(aVideo => aVideo.videoId !== videoId);
    setVideoList(newVideoList);
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
        onDelete={onDeleteVideo}
      />
    </Box>
  );
};

export default App;
