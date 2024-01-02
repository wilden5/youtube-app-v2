import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../youtube/services/search.service';
import { LoginService } from '../../../auth/services/login.service';
import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    protected searchService: SearchService,
    protected router: Router,
    protected loginService: LoginService,
    private loggerService: LoggerService
  ) {}

  filtersState = false;

  ngOnInit(): void {
    this.loginService.loginStatus$.subscribe();
  }

  changeFiltersState(): void {
    this.filtersState = !this.filtersState;
  }

  performSearch(searchQuery: string): void {
    this.loggerService.logMessage('Search performed!');
    this.router.navigate(['search']);
    this.searchService.searchQuery.next(searchQuery);
  }

  loginUser(): void {
    this.router.navigate(['auth/login']);
  }

  logoutUser(): void {
    this.loginService.loginStatus$.next(false);
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
