import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../root.state';
import {
  selectSortAllItemsByDate,
  selectSortAllItemsByViews,
} from '../../youtube/state/youtube.selectors';
import { IYoutubeItem } from '../../youtube/models/youtube-search';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private isDateSortAsc = true;

  private isViewsSortAsc = true;

  filterQuery = new BehaviorSubject<string>('');

  allYoutubeItems$?: Observable<IYoutubeItem[]>;

  constructor(private store: Store<AppState>) {}

  filterByDate(): void {
    if (this.isDateSortAsc) {
      this.allYoutubeItems$ = this.store.select(selectSortAllItemsByDate('asc'));
    } else {
      this.allYoutubeItems$ = this.store.select(selectSortAllItemsByDate('desc'));
    }
    this.isDateSortAsc = !this.isDateSortAsc;
  }

  filterByViews(): void {
    if (this.isViewsSortAsc) {
      this.allYoutubeItems$ = this.store.select(selectSortAllItemsByViews('asc'));
    } else {
      this.allYoutubeItems$ = this.store.select(selectSortAllItemsByViews('desc'));
    }
    this.isViewsSortAsc = !this.isViewsSortAsc;
  }

  filterByKeyword(): void {
    this.allYoutubeItems$ = this.allYoutubeItems$?.pipe(
      map((array) =>
        array.filter((item) =>
          item.snippet.title.toLowerCase().includes(this.filterQuery.value.toLowerCase())
        )
      )
    );
  }
}
