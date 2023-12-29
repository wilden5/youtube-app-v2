import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../youtube/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchService = inject(SearchService);

  router = inject(Router);

  filtersState = false;

  changeFiltersState(): void {
    this.filtersState = !this.filtersState;
  }

  performSearch(searchQuery: string): void {
    this.searchService.searchQuery.next(searchQuery);
    this.router.navigate(['search']);
  }
}
