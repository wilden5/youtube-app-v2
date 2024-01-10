import { createSelector } from '@ngrx/store';
import { AppState } from '../../core/root.state';
import { FavoriteState } from './favorite.reducer';
import { selectAllItems } from '../../youtube/state/youtube.selectors';

export const selectFavoriteFeature = (state: AppState): FavoriteState => state.favorite;

export const selectFavoriteItems = createSelector(
  selectFavoriteFeature,
  (favoriteState: FavoriteState) => favoriteState.itemsIds
);

export const selectFilteredItems = createSelector(
  selectAllItems,
  selectFavoriteItems,
  (items, ids) => {
    return items.filter((item) => ids.includes(String(item.id)));
  }
);
