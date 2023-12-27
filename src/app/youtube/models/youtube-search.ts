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

export interface IYoutubeItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
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
}

export interface IYoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}
