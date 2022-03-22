import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import LottieIcon from "@/components/base/LottieIcon";
import { EMPTY_VIDEO_MSG } from "@/constants/classroom";
import { SnackbarType } from "@/models/Snackbar";
import { Video } from "@/models/Video";
import ClassroomSnackbar from "@/components/base/ClassroomSnackbar";
import { SavedVideoItem } from "@/components/domain/SavedVideo";

type Props = {
  videoList: Video[];
  onClick: (newVideo: Video) => void;
  onDelete: (videoId: string) => void;
};

const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SavedVideoList = ({ videoList, onClick, onDelete }: Props) => {
  const [snack, setSnack] = useState<SnackbarType>({
    type: "",
    status: false,
  });

  const onSnackbar = (type: string, status: boolean) => {
    setSnack({
      type,
      status,
    });
  };

  const onResetSnack = () => {
    setSnack({
      type: "",
      status: false,
    });
  };

  return (
    <VideoListContainer id="saved-video-list">
      {videoList.length ? (
        videoList.map((aVideo, index) => {
          return (
            <SavedVideoItem
              key={index}
              videoInfo={aVideo}
              onClick={onClick}
              onSnackbar={onSnackbar}
              onDelete={onDelete}
            />
          );
        })
      ) : (
        <Box
          sx={{
            mt: 10,
          }}
        >
          <LottieIcon type={"noVideo"} />
          <Typography
            align="center"
            color="#586066"
            sx={{
              mt: 5,
            }}
          >
            {EMPTY_VIDEO_MSG}
          </Typography>
        </Box>
      )}
      <ClassroomSnackbar snack={snack} onReset={onResetSnack} />
    </VideoListContainer>
  );
};

export default SavedVideoList;
