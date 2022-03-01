import { Video } from "../models/Video";

type results = {
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    publishTime: string;
    title: string;
  };
};

export const formatVideo = (videos: results[]): Video[] => {
  const formattedVideos = videos.map((video: results) => {
    const { id, snippet } = video;
    const { channelId, channelTitle, publishTime, title } = snippet;

    return {
      videoId: id.videoId,
      channelId,
      channelTitle,
      publishTime,
      title,
    };
  });
  return formattedVideos;
};
