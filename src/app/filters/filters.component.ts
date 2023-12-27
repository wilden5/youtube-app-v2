import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  filtersService = inject(FiltersService);

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.filtersService.filterQuery.pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  applyDateFilter(): void {
    this.filtersService.filterByDate();
  }

  filterByViews(): void {}

  applyByKeywordFilter(value: string): void {
    this.filtersService.filterQuery.next(value);
    this.filtersService.filterByKeyword();
  }
}
