import { Injectable } from '@angular/core';
import { concatMap, map, Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IYoutubeItem, IYoutubeSearchResponse } from '../models/youtube-search';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchQuery = new Subject<string>();

  mockYoutubeItemsSorted = new Observable<IYoutubeItem[]>();

  fetchYoutubeItemsBySearchQuery(query: string): Observable<IYoutubeItem[]> {
    return this.http
      .get<IYoutubeSearchResponse>(`search?part=snippet&q=${query}&maxResults=20`)
      .pipe(
        concatMap((response) => {
          const urls = response.items.map((item) => item.id.videoId).join(',');
          return this.fetchYoutubeItemStatistic(urls);
        })
      );
  }

  fetchYoutubeItemStatistic(ids: string): Observable<IYoutubeItem[]> {
    return this.http
      .get<IYoutubeSearchResponse>(`videos?part=snippet,statistics&id=${ids}`)
      .pipe(map((response) => response.items));
  }
}
