import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, concatMap, EMPTY, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IYoutubeItem, IYoutubeSearchResponse } from '../models/youtube-search';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  nextPageToken = '';

  prevPageToken = '';

  constructor(private http: HttpClient) {}

  searchQuery = new BehaviorSubject<string>('');

  fetchYoutubeItemsBySearchQuery(query: string, pageToken?: string): Observable<IYoutubeItem[]> {
    return this.http
      .get<IYoutubeSearchResponse>(
        `search?part=snippet&q=${query}&maxResults=20&pageToken=${pageToken || ''}`
      )
      .pipe(
        tap((response) => {
          if (response.prevPageToken) {
            this.prevPageToken = response.prevPageToken;
          } else {
            this.prevPageToken = '';
          }
          this.nextPageToken = response.nextPageToken;
        }),
        concatMap((response) => {
          const urls = response.items.map((item) => item.id.videoId).join(',');
          return this.fetchYoutubeItemStatistic(urls);
        }),
        catchError(() => EMPTY)
      );
  }

  fetchYoutubeItemStatistic(ids: string): Observable<IYoutubeItem[]> {
    return this.http.get<IYoutubeSearchResponse>(`videos?part=snippet,statistics&id=${ids}`).pipe(
      map((response) => response.items),
      catchError(() => EMPTY)
    );
  }
}
