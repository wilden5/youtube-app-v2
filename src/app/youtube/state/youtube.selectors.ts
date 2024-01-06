import { createSelector } from '@ngrx/store';
import { YoutubeState } from './youtube.reducer';
import { AppState } from '../../core/root.state';

export const selectYoutubeFeature = (state: AppState): YoutubeState => state.youtube;

export const selectYoutubeItems = createSelector(
  selectYoutubeFeature,
  (youtubeState: YoutubeState) => youtubeState.youtubeItems
);

export const selectYoutubeIds = createSelector(
  selectYoutubeFeature,
  (youtubeState: YoutubeState) => youtubeState.itemsIds
);

export const selectAllItems = createSelector(
  selectYoutubeItems,
  selectYoutubeIds,
  (youtubeItems, itemsIds) => {
    const items = itemsIds.map((id) => youtubeItems[id]);
    return items;
  }
);

export const selectYoutubeSpecificItem = (id: string) =>
  createSelector(selectYoutubeItems, selectYoutubeIds, (item) => {
    return item[id];
  });
