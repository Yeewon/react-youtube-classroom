import React, { useMemo, useState } from "react";
import { FilterButtonList } from "@/components/domain/ButtonList";
import { VIDEO_INFOS } from "@/constants/localStorage";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Video } from "@/models/Video";
import SavedVideoList from "@/components/domain/SavedVideo/SavedVideoList";
import { DELETE, LIKED, TO_WATCH, WATCHED } from "@/constants/classroom";
import ClassroomSnackbar from "@/components/base/ClassroomSnackbar";
import { SnackbarType } from "@/models/Snackbar";

const Classroom = () => {
  const [displayOption, setDisplayOption] = useState(TO_WATCH);
  const [videoList, setVideoList] = useLocalStorage<Video[]>(VIDEO_INFOS, []);
  const displayVideoList = useMemo(() => {
    let newVideoList: Video[] = [];

    if (displayOption === TO_WATCH) {
      newVideoList = videoList.filter(({ status }) => !status.isWatched);
    }
    if (displayOption === WATCHED) {
      newVideoList = videoList.filter(({ status }) => status.isWatched);
    }
    if (displayOption === LIKED) {
      newVideoList = videoList.filter(({ status }) => status.isLiked);
    }
    return newVideoList;
  }, [displayOption, videoList]);

  const [snack, setSnack] = useState<SnackbarType>({
    type: "",
    status: false,
  });

  const handleDisplay = (option: string) => {
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
    <>
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
    </>
  );
};

export default Classroom;
