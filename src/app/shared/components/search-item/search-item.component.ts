import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IYoutubeItem, IYoutubeItemID } from '../../../youtube/models/youtube-search';
import { AppState } from '../../../core/root.state';
import { deleteCustomItem } from '../../../youtube/state/youtube.actions';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  protected readonly String = String;

  @Input() searchItem?: IYoutubeItem;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

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

  deleteCustomItem(id: string): void {
    this.store.dispatch(deleteCustomItem({ id }));
  }
}
