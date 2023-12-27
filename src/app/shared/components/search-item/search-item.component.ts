import { Component, Input } from '@angular/core';
import { IYoutubeItem } from '../../../youtube/models/youtube-search';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() searchItem?: IYoutubeItem;

  truncateItemTitle(title: string): string {
    return title.length > 40 ? `${title.slice(0, 40)}...` : title;
  }
}
