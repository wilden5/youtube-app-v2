import { createAction, props } from '@ngrx/store';

export const addItemToFavorite = createAction(
  '[FAVORITE] Add Item To Favorite',
  props<{ id: string }>()
);
