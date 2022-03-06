import { Box, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { EMPTY_VIDEO_MSG } from "../constants/classroom";
import { Video } from "../models/Video";
import LottieIcon from "./lottieIcon";
import SavedVideoArticle from "./SavedVideoArticle";

type Props = {
  videoList: Video[];
  onClick: (newVideo: Video) => void;
  onDelete: (videoId: string) => void;
};

const SavedVideoList = ({ videoList, onClick, onDelete }: Props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("snackbar test!");

  const onSnackbar = (type: string) => {
    setOpen(true);
    setMessage(type);
  };

  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
            sx={{
              mt: 5,
            }}
          >
            {EMPTY_VIDEO_MSG}
          </Typography>
        </Box>
      )}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        message={message}
      />
    </Box>
  );
};

export default SavedVideoList;
