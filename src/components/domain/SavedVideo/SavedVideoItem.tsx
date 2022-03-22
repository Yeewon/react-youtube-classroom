import styled from "@emotion/styled";
import { Article } from "../..";
import { Video } from "@/models/Video";
import { StatusButtonList } from "@/components/domain/ButtonList";

type Props = {
  videoInfo: Video;
  onClick: (newVideo: Video) => void;
  onSnackbar: (type: string, status: boolean) => void;
  onDelete: (videoId: string) => void;
};

const VideoContainer = styled.div`
  max-width: 180px;
  margin: 5px;
`;

const SavedVideoItem = ({
  videoInfo,
  onClick,
  onSnackbar,
  onDelete,
}: Props) => {
  return (
    <VideoContainer className="saved-video" data-id={videoInfo.videoId}>
      <Article videoInfo={videoInfo} />
      <StatusButtonList
        video={videoInfo}
        onClick={onClick}
        onSnackbar={onSnackbar}
        onDelete={onDelete}
      />
    </VideoContainer>
  );
};

export default SavedVideoItem;
