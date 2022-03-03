import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { DELETE_CONFIRM_NSG } from "../constants/classroom";
import { Video } from "../models/Video";

type Props = {
  video: Video;
  onClick: (newVideo: Video) => void;
  onSnackbar: (type: string) => void;
  onDelete: (videoId: string) => void;
};

const StatusButton = styled.span`
  cursor: pointer;
  margin-left: 7px;
`;

const StatusButtonList = ({ video, onClick, onSnackbar, onDelete }: Props) => {
  const { status } = video;
  const { isWatched, isLiked } = status;

  const handleStatusButton = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLInputElement;

    if (["isWatched", "isLiked"].includes(id)) {
      const newVideo: Video = {
        ...video,
        status: {
          ...status,
          [id]: id === "isWatched" ? !status.isWatched : !status.isLiked,
        },
      };
      onClick(newVideo);
      onSnackbar(id);
    }
  };

  const handleDeleteVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.confirm(DELETE_CONFIRM_NSG)) {
      onDelete(video.videoId);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box onClick={handleStatusButton}>
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
      </Box>
      <StatusButton onClick={handleDeleteVideo}>🗑</StatusButton>
    </Box>
  );
};

export default StatusButtonList;
