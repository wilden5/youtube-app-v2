export interface IYoutubeSearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IYoutubeItem[];
}

export interface IYoutubeItemID {
  kind: string;
  videoId: string;
}

export interface IYoutubeItem {
  kind: string;
  etag: string;
  id: IYoutubeItemID;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: IYoutubeThumbnail;
      medium: IYoutubeThumbnail;
      high: IYoutubeThumbnail;
    };
  };
  statistics?: IYoutubeItemStatistics;
}

export interface IYoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface IYoutubeItemStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
