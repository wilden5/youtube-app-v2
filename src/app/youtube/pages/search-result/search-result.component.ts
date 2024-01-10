import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchService } from '../../services/search.service';
import { loadNextPage, loadPrevPage } from '../../state/youtube.actions';
import { AppState } from '../../../core/root.state';
import { FiltersService } from '../../../core/services/filters.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  constructor(
    protected searchService: SearchService,
    protected store: Store<AppState>,
    protected filterService: FiltersService
  ) {}

  prevPageClick(): void {
    this.store.dispatch(
      loadPrevPage({
        query: this.searchService.searchQuery.value,
        pageToken: this.searchService.prevPageToken,
      })
    );
  }

  nextPageClick(): void {
    this.store.dispatch(
      loadNextPage({
        query: this.searchService.searchQuery.value,
        pageToken: this.searchService.nextPageToken,
      })
    );
  }
}
