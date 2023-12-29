import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../youtube/services/search.service';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    protected searchService: SearchService,
    protected router: Router,
    protected loginService: LoginService
  ) {}

  filtersState = false;

  changeFiltersState(): void {
    this.filtersState = !this.filtersState;
  }

  performSearch(searchQuery: string): void {
    this.router.navigate(['search']);
    setTimeout(() => {
      this.searchService.searchQuery.next(searchQuery);
    }, 50);
  }

  loginUser(): void {
    this.router.navigate(['auth/login']);
  }

  logoutUser(): void {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
