import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private searchService = inject(SearchService);

  private isDateSortAsc = true;

  filterQuery = new BehaviorSubject<string>('');

  filterByDate(): void {
    if (this.isDateSortAsc) {
      this.searchService.mockYoutubeItemsSorted = this.searchService.mockYoutubeItemsSorted.pipe(
        map((array) =>
          array.sort(
            (a, b) =>
              Number(new Date(b.snippet.publishedAt)) - Number(new Date(a.snippet.publishedAt))
          )
        )
      );
    } else {
      this.searchService.mockYoutubeItemsSorted = this.searchService.mockYoutubeItemsSorted.pipe(
        map((array) =>
          array.sort(
            (a, b) =>
              Number(new Date(a.snippet.publishedAt)) - Number(new Date(b.snippet.publishedAt))
          )
        )
      );
    }
    this.isDateSortAsc = !this.isDateSortAsc;
  }

  filterByKeyword(): void {
    this.searchService.mockYoutubeItemsSorted = this.searchService.mockYoutubeItemsSorted.pipe(
      map((array) =>
        array.filter((item) =>
          item.snippet.title.toLowerCase().includes(this.filterQuery.value.toLowerCase())
        )
      )
    );
  }
}
