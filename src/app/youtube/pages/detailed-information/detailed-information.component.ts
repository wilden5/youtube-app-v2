import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IYoutubeItem } from '../../models/youtube-search';
import { SearchService } from '../../services/search.service';
import { AppState } from '../../../core/root.state';
import { selectYoutubeSpecificItem } from '../../state/youtube.selectors';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent {
  searchItem?: Observable<IYoutubeItem>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    private store: Store<AppState>
  ) {
    const pageId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(pageId);
    this.searchItem = this.store.select(selectYoutubeSpecificItem(pageId));
  }

  truncateItemDescription(title: string): string {
    return title.length > 300 ? `${title.slice(0, 300)}...` : title;
  }
}
