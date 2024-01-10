import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IYoutubeItem, IYoutubeItemID } from '../../../youtube/models/youtube-search';
import { AppState } from '../../../core/root.state';
import { deleteCustomItem } from '../../../youtube/state/youtube.actions';
import { addItemToFavorite } from '../../../favorite/state/favorite.actions';
import { selectFavoriteItems } from '../../../favorite/state/favorite.selectors';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() searchItem?: IYoutubeItem;

  favoriteIds$: Observable<string[]>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.favoriteIds$ = this.store.select(selectFavoriteItems);
  }

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

  addToFavorite(id: string | IYoutubeItemID): void {
    this.store.dispatch(addItemToFavorite({ id: String(id) }));
  }

  isFavoriteItem(id: IYoutubeItemID): Observable<boolean> {
    return this.favoriteIds$.pipe(map((favoriteIds) => favoriteIds.includes(String(id))));
  }
}
