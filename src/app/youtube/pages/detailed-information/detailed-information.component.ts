import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IYoutubeItem } from '../../models/youtube-search';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent {
  searchItem?: IYoutubeItem;

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService
  ) {
    this.searchItem = this.searchService.mockYoutubeItems.find(
      (item) => item.id.videoId === this.activatedRoute.snapshot.paramMap.get('id')
    );
  }
}
