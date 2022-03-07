import { Box, Typography } from "@mui/material";
import { useState } from "react";
import LottieIcon from "@/components/base/LottieIcon";
import { EMPTY_VIDEO_MSG } from "@/constants/classroom";
import { SnackbarType } from "@/models/Snackbar";
import { Video } from "@/models/Video";
import ClassroomSnackbar from "@/components/base/ClassroomSnackbar";
import SavedVideoArticle from "./SavedVideoArticle";

type Props = {
  videoList: Video[];
  onClick: (newVideo: Video) => void;
  onDelete: (videoId: string) => void;
};

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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {videoList.length ? (
        videoList.map((aVideo, index) => {
          return (
            <SavedVideoArticle
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
    </Box>
  );
};

export default SavedVideoList;
