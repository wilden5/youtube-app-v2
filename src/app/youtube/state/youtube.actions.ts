import { createAction, props } from '@ngrx/store';
import { IYoutubeItem } from '../models/youtube-search';

export const fetchYoutubeItems = createAction(
  '[YOUTUBE] Fetch Youtube Items Attempt',
  props<{ query: string }>()
);

export const fetchYoutubeItemsSuccess = createAction(
  '[YOUTUBE] Fetch Youtube Items Success',
  props<{ youtubeItems: IYoutubeItem[] }>()
);

export const fetchYoutubeItemsFailure = createAction(
  '[YOUTUBE] Fetch Youtube Items Failure',
  props<{ error: Error }>()
);

export const addCustomItem = createAction(
  '[CUSTOM ITEM] Add Custom Item',
  props<{ item: Partial<IYoutubeItem> }>()
);

export const deleteCustomItem = createAction(
  '[CUSTOM ITEM] Delete Custom Item',
  props<{ id: string }>()
);

export const loadNextPage = createAction(
  '[[YOUTUBE] Load Next Page Attempt]',
  props<{ query: string; pageToken: string }>()
);

export const loadNextPageSuccess = createAction(
  '[[YOUTUBE] Load Next Page Success]',
  props<{ youtubeItems: IYoutubeItem[] }>()
);

export const loadNextPageFailure = createAction(
  '[YOUTUBE] Load Next Page Failure',
  props<{ error: Error }>()
);
