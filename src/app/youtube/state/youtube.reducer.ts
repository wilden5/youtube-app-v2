import { createReducer, on } from '@ngrx/store';
import { IYoutubeItem } from '../models/youtube-search';
import { fetchYoutubeItemsSuccess } from './youtube.actions';

export interface YoutubeState {
  youtubeItems: { [key: string]: IYoutubeItem };
  itemsIds: string[];
}

export const initialYoutubeState: YoutubeState = {
  youtubeItems: {},
  itemsIds: [],
};

export const youtubeReducer = createReducer(
  initialYoutubeState,
  on(fetchYoutubeItemsSuccess, (state, { youtubeItems }) => {
    const items = youtubeItems.reduce((acc, item) => {
      return { ...acc, [String(item.id)]: item };
    }, {});
    const ids = youtubeItems.map((item) => String(item.id));
    return {
      ...state,
      youtubeItems: items,
      itemsIds: ids,
    };
  })
);
