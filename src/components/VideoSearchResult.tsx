import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Video } from "../models/Video";
import Article from "./Article";
import styled from "@emotion/styled";

type Props = {
  videoInfo: Video;
  onClickSaveButton: any;
  initialState: boolean;
  key: number;
};

const Button = styled.button`
  height: 36px;
  min-width: 64px;
  margin-left: 10px;
  padding: 0 16px;
  border-radius: 4px;initialState
  outline: 0;
  border-style: none;
  cursor: pointer;
`;

const VideoSearchResult = ({
  videoInfo,
  initialState,
  onClickSaveButton,
  key,
}: Props) => {
  const [isSaved, setIsSaved] = useState(initialState);

  const handleSaveVideo = () => {
    const newState = !isSaved;
    setIsSaved(newState);
    onClickSaveButton(videoInfo, newState);
  };

  return (
    <Box
      sx={{
        maxWidth: "180px",
        m: 0.5,
      }}
    >
      <Article videoInfo={videoInfo} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={handleSaveVideo}>
          {isSaved ? "↪️ 저장 취소" : "⬇️ 저장"}
        </Button>
      </Box>
    </Box>
  );
};

export default VideoSearchResult;
