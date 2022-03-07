import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterButtonList from "./components/domain/ButtonList/FIlterButtonList";
import Title from "./components/base/Title";
import { VIDEO_INFOS } from "./constants/localStorage";
import useLocalStorage from "./hooks/useLocalStorage";
import { Video } from "./models/Video";
import SavedVideoList from "./components/domain/SavedVideo/SavedVideoList";
import { DELETE, LIKED, TO_WATCH, WATCHED } from "./constants/classroom";
import ClassroomSnackbar from "./components/base/ClassroomSnackbar";
import { SnackbarType } from "./models/Snackbar";

const App = () => {
  const [displayOption, setDisplayOption] = useState("toWatch");
  const [videoList, setVideoList] = useLocalStorage<Video[]>(VIDEO_INFOS, []);
  const [displayVideoList, setDisplayVideoList] = useState(videoList);
  const [snack, setSnack] = useState<SnackbarType>({
    type: "",
    status: false,
  });

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
    setSnack({
      type: DELETE,
      status: false,
    });
  };

  const onResetSnack = () => {
    setSnack({
      type: "",
      status: false,
    });
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
      <ClassroomSnackbar snack={snack} onReset={onResetSnack} />
    </Box>
  );
};

export default App;
