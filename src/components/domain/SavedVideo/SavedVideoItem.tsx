import { Box } from "@mui/material";
import { Article } from "../..";
import { Video } from "@/models/Video";
import { StatusButtonList } from "@/components/domain/ButtonList";

type Props = {
  videoInfo: Video;
  onClick: (newVideo: Video) => void;
  onSnackbar: (type: string, status: boolean) => void;
  onDelete: (videoId: string) => void;
};

const SavedVideoItem = ({
  videoInfo,
  onClick,
  onSnackbar,
  onDelete,
}: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "180px",
        m: 0.5,
      }}
    >
      <Article videoInfo={videoInfo} />
      <StatusButtonList
        video={videoInfo}
        onClick={onClick}
        onSnackbar={onSnackbar}
        onDelete={onDelete}
      />
    </Box>
  );
};

export default SavedVideoItem;
