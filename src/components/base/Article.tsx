import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Video } from "@/models/Video";
import { formatDate } from "@/utils/date";

type Props = {
  videoInfo: Video;
};

const Iframe = styled.iframe`
  width: 100%;
  height: 120px;
`;

const VideoTitle = styled.h3`
  display: -webkit-box;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #0a0a0a;
`;
const ChannelLink = styled.a`
  font-size: 12px;
  color: #606060;
  display: block;
  width: 100%;
  text-decoration: none;
`;
const Date = styled.p`
  font-size: 12px;
  display: inline-block;
  margin: 0;
  color: #606060;
`;

const Article = ({ videoInfo }: Props) => {
  const { videoId, channelId, channelTitle, publishTime, title } = videoInfo;
  const date = formatDate(publishTime);
  return (
    <article>
      <Iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={false}
      ></Iframe>
      <Box
        sx={{
          width: "100%",
          pt: 0.5,
          pl: 0.5,
        }}
      >
        <VideoTitle>{title}</VideoTitle>
        <ChannelLink
          href={`https://www.youtube-nocookie.com/channel/${channelId} `}
          target="_blank"
        >
          {channelTitle}
        </ChannelLink>
        <Date>{date}</Date>
      </Box>
    </article>
  );
};

export default Article;
