import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Video } from "../models/Video";

type Props = {
  video: Video;
  onClick: (newVideo: Video) => void;
};

const StatusButton = styled.span`
  cursor: pointer;
  margin-left: 7px;
`;

const StatusButtonList = ({ video, onClick }: Props) => {
  const { status } = video;
  const { isWatched, isLiked } = status;

  const handleStatusButton = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLInputElement;
    const newVideo: Video = {
      ...video,
      status: {
        ...status,
        [id]: id === "isWatched" ? !status.isWatched : !status.isLiked,
      },
    };
    onClick(newVideo);
  };

  return (
    <Box
      onClick={handleStatusButton}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <StatusButton
        id="isWatched"
        style={{
          opacity: isWatched ? 1 : 0.3,
        }}
      >
        ✅
      </StatusButton>
      <StatusButton
        id="isLiked"
        style={{
          opacity: isLiked ? 1 : 0.3,
        }}
      >
        👍🏻
      </StatusButton>
      <StatusButton>🗑</StatusButton>
    </Box>
  );
};

export default StatusButtonList;
