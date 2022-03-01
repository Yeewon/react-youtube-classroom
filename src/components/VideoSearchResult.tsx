import { Box } from "@mui/material";
import { useState } from "react";
import { Video } from "../models/Video";
import Article from "./Article";
import Button from "./Button";

type Props = {
  videoInfo: Video;
  key: number;
};

const VideoSearchResult = ({ videoInfo, key }: Props) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Box
      sx={{
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
        {isSaved ? <Button>↪️ 저장 취소</Button> : <Button>⬇️ 저장</Button>}
      </Box>
    </Box>
  );
};

export default VideoSearchResult;
