import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IYoutubeItem } from '../youtube/models/youtube-search';
import { mockYoutubeSearchResponse } from '../utils/mock';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchQuery = new Subject<string>();

  mockYoutubeItems = mockYoutubeSearchResponse.items;

  mockYoutubeItemsSorted = new Observable<IYoutubeItem[]>();
}
