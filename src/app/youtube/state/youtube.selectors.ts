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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectYoutubeSpecificItem = (id: string) =>
  createSelector(selectYoutubeItems, selectYoutubeIds, (item) => {
    return item[id];
  });

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectSortAllItemsByDate = (type: string) =>
  createSelector(selectAllItems, (items) => {
    return type === 'asc'
      ? items.sort(
          (a, b) =>
            Number(new Date(b.snippet.publishedAt)) - Number(new Date(a.snippet.publishedAt))
        )
      : items.sort(
          (a, b) =>
            Number(new Date(a.snippet.publishedAt)) - Number(new Date(b.snippet.publishedAt))
        );
  });

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectSortAllItemsByViews = (type: string) =>
  createSelector(selectAllItems, (items) => {
    return type === 'asc'
      ? items.sort((a, b) => Number(b.statistics?.viewCount) - Number(a.statistics?.viewCount))
      : items.sort((a, b) => Number(a.statistics?.viewCount) - Number(b.statistics?.viewCount));
  });
