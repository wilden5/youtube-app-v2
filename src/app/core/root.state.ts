import { YoutubeState } from '../youtube/state/youtube.reducer';
import { FavoriteState } from '../favorite/state/favorite.reducer';

export interface AppState {
  youtube: YoutubeState;
  favorite: FavoriteState;
}
