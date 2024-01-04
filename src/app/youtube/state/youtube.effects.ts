import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, tap } from 'rxjs';
import {
  fetchYoutubeItems,
  fetchYoutubeItemsFailure,
  fetchYoutubeItemsSuccess,
} from './youtube.actions';
import { SearchService } from '../services/search.service';

@Injectable()
export class YoutubeEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}

  fetchYoutubeItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchYoutubeItems),
      concatMap((action) =>
        this.searchService.fetchYoutubeItemsBySearchQuery(action.query).pipe(
          map((response) => fetchYoutubeItemsSuccess({ youtubeItems: response })),
          catchError((error) => {
            return of(fetchYoutubeItemsFailure({ error }));
          })
        )
      )
    );
  });

  fetchYoutubeItemsSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fetchYoutubeItemsSuccess),
        tap(() => console.log('Youtube items fetch succeed!'))
      );
    },
    { dispatch: false }
  );

  fetchYoutubeItemsFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fetchYoutubeItemsFailure),
        tap((action) => console.log(action.error))
      );
    },
    { dispatch: false }
  );
}
