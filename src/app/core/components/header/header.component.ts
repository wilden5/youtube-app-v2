import { Component, DestroyRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter } from 'rxjs';
import { Store } from '@ngrx/store';
import { SearchService } from '../../../youtube/services/search.service';
import { LoginService } from '../../../auth/services/login.service';
import { LoggerService } from '../../services/logger/logger.service';
import { FiltersService } from '../../services/filters.service';
import { selectAllItems } from '../../../youtube/state/youtube.selectors';
import { fetchYoutubeItems } from '../../../youtube/state/youtube.actions';
import { AppState } from '../../root.state';

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
    private loggerService: LoggerService,
    protected filterService: FiltersService,
    private destroyRef: DestroyRef,
    protected store: Store<AppState>
  ) {}

  filtersState = false;

  ngOnInit(): void {
    this.loginService.loginStatus$.subscribe();
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
