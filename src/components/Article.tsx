import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Video } from "../models/Video";
import { formatDate } from "../utils/date";
import StatusButtonList from "./StatusButtonList";

const ArticleContainer = styled.article``;
const Iframe = styled.iframe`
  width: 100%;
  height: 120px;
`;

const VideoTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  text-overflow: ellipsis;
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

const Article = ({
  videoId,
  channelId,
  channelTitle,
  publishTime,
  title,
}: Video) => {
  const date = formatDate(publishTime);
  return (
    <ArticleContainer>
      <Iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={false}
      ></Iframe>
      <Box
        sx={{
          pt: 0.5,
          pl: 0.5,
        }}
      >
        <VideoTitle>{title}</VideoTitle>
        <ChannelLink
          href={`https://www.youtube.com/channel/${channelId} `}
          target="_blank"
        >
          {channelTitle}
        </ChannelLink>
        <Date>{date}</Date>
      </Box>
      <StatusButtonList />
    </ArticleContainer>
  );
};

export default Article;