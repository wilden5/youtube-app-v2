import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IYoutubeItem } from '../../../youtube/models/youtube-search';
import { AppState } from '../../../core/root.state';
import { selectFilteredItems } from '../../state/favorite.selectors';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  @Input() searchItem?: IYoutubeItem;

  filteredItems$: Observable<IYoutubeItem[]>;

  constructor(private store: Store<AppState>) {
    this.filteredItems$ = this.store.select(selectFilteredItems);
  }
}
