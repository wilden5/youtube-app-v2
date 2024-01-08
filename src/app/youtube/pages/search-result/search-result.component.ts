import { Component, DestroyRef, OnInit } from '@angular/core';
import { debounceTime, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { SearchService } from '../../services/search.service';
import { fetchYoutubeItems } from '../../state/youtube.actions';
import { selectAllItems } from '../../state/youtube.selectors';
import { AppState } from '../../../core/root.state';
import { FiltersService } from '../../../core/services/filters.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  constructor(
    protected searchService: SearchService,
    private destroyRef: DestroyRef,
    protected store: Store<AppState>,
    protected filterService: FiltersService
  ) {}

  ngOnInit(): void {
    this.filterService.allYoutubeItems$ = this.store.select(selectAllItems);
    this.searchService.searchQuery
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((query) => query.length > 2),
        debounceTime(2000)
      )
      .subscribe((searchQuery) => {
        this.store.dispatch(fetchYoutubeItems({ query: searchQuery }));
      });
  }
}
