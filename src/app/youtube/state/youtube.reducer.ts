import { createReducer, on } from '@ngrx/store';
import { IYoutubeItem } from '../models/youtube-search';
import { addCustomItem, deleteCustomItem, fetchYoutubeItemsSuccess } from './youtube.actions';

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
  }),
  on(addCustomItem, (state, { item }) => {
    return {
      ...state,
      youtubeItems: { ...state.youtubeItems, [item.id!.videoId]: item as IYoutubeItem },
      itemsIds: [item.id!.videoId, ...state.itemsIds],
    };
  }),
  on(deleteCustomItem, (state, { id }) => {
    const { [id]: removeItem, ...remainingItems } = state.youtubeItems;
    return {
      ...state,
      youtubeItems: remainingItems,
    };
  })
);
