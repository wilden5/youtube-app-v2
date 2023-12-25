import { Component } from '@angular/core';
import { mockYoutubeSearchResponse } from '../../utils/mock';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  protected readonly mockYoutubeSearchResponse = mockYoutubeSearchResponse;
}
