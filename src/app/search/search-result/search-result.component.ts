import { Component, inject, OnInit } from '@angular/core';
import { mockYoutubeSearchResponse } from '../../utils/mock';
import { IYoutubeItem } from '../../models/youtube-search';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  protected readonly mockYoutubeSearchResponse = mockYoutubeSearchResponse;

  searchService = inject(SearchService);

  array: IYoutubeItem[] = [];

  ngOnInit(): void {
    this.searchService.searchQuery.subscribe((obs) => {
      this.array = this.mockYoutubeSearchResponse.items.filter((item) =>
        item.snippet.title.toLowerCase().includes(obs.toLowerCase())
      );
    });
  }
}
