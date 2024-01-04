import { createAction, props } from '@ngrx/store';
import { IYoutubeItem } from '../models/youtube-search';

export const fetchYoutubeItems = createAction(
  '[YOUTUBE] Fetch Youtube Items',
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
