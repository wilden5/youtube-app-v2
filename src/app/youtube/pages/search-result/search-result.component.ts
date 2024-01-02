import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  constructor(
    protected searchService: SearchService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.searchService.searchQuery
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((searchQuery) => {
        this.searchService.mockYoutubeItemsSorted =
          this.searchService.fetchYoutubeItemsBySearchQuery(searchQuery);
      });
  }
}
