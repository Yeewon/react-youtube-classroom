import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { IS_LIKED, IS_WATCHED } from "@/constants/classroom";
import { DELETE_VIDEO_CONFIRM_NSG } from "@/constants/confirmMessage";
import { Video } from "@/models/Video";

type Props = {
  video: Video;
  onClick: (newVideo: Video) => void;
  onSnackbar: (type: string, status: boolean) => void;
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
    const isClicked =
      id === IS_WATCHED ? !video.status.isWatched : !video.status.isLiked;

    if ([IS_WATCHED, IS_LIKED].includes(id)) {
      const newVideo: Video = {
        ...video,
        status: {
          ...status,
          [id]: id === IS_WATCHED ? !status.isWatched : !status.isLiked,
        },
      };

      onClick(newVideo);
      onSnackbar(id, isClicked);
    }
  };

  const handleDeleteVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.confirm(DELETE_VIDEO_CONFIRM_NSG)) {
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
      <div id="button-list" onClick={handleStatusButton}>
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
      </div>
      <StatusButton id="delete" onClick={handleDeleteVideo}>
        🗑
      </StatusButton>
    </Box>
  );
};

export default StatusButtonList;
