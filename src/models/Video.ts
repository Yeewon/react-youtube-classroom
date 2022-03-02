export interface Video {
  videoId: string;
  channelId: string;
  channelTitle: string;
  publishTime: string;
  title: string;
  status?: {
    isWatched: boolean;
    isLiked: boolean;
  };
}
