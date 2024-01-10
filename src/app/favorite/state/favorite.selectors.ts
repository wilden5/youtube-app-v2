import { createSelector } from '@ngrx/store';
import { AppState } from '../../core/root.state';
import { FavoriteState } from './favorite.reducer';

export const selectFavoriteFeature = (state: AppState): FavoriteState => state.favorite;

export const selectFavoriteItems = createSelector(
  selectFavoriteFeature,
  (favoriteState: FavoriteState) => favoriteState.itemsIds
);
