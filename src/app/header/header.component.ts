import { Component, inject } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchService = inject(SearchService);

  filtersState = false;

  changeFiltersState(): void {
    this.filtersState = !this.filtersState;
  }

  performSearch(searchQuery: string): void {
    this.searchService.searchQuery.next(searchQuery);
  }
}
