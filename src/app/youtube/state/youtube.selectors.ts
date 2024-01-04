import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeState } from './youtube.reducer';

export const selectYoutubeFeature = createFeatureSelector<YoutubeState>('youtube');

export const selectYoutubeItems = createSelector(
  selectYoutubeFeature,
  (youtubeState) => youtubeState.youtubeItems
);

export const selectYoutubeIds = createSelector(
  selectYoutubeFeature,
  (youtubeState) => youtubeState.itemsIds
);

export const selectAllItems = createSelector(
  selectYoutubeItems,
  selectYoutubeIds,
  (youtubeItems, itemsIds) => {
    const items = itemsIds.map((id) => youtubeItems[id]);
    return items;
  }
);
