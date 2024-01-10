import { createReducer, on } from '@ngrx/store';
import { addItemToFavorite } from './favorite.actions';

export interface FavoriteState {
  itemsIds: string[];
}

export const initialFavoriteState: FavoriteState = {
  itemsIds: [],
};

export const favoriteReducer = createReducer(
  initialFavoriteState,
  on(addItemToFavorite, (state, { id }) => {
    const isItemInFavorite = state.itemsIds.includes(id);
    const ids = isItemInFavorite
      ? state.itemsIds.filter((itemId) => itemId !== id)
      : [...state.itemsIds, id];
    return {
      ...state,
      itemsIds: ids,
    };
  })
);
