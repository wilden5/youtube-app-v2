import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IYoutubeItem, IYoutubeItemID } from '../../../youtube/models/youtube-search';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  protected readonly String = String;

  @Input() searchItem?: IYoutubeItem;

  constructor(private router: Router) {}

  truncateItemTitle(title: string): string {
    return title.length > 40 ? `${title.slice(0, 40)}...` : title;
  }

  openDetailedInformation(itemId: string | IYoutubeItemID): void {
    if (typeof itemId === 'string') {
      this.router.navigate(['search', `${itemId}`]);
    } else {
      this.router.navigate(['search', `${itemId.videoId}`]);
    }
  }
}
