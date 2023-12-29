import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [SearchResultComponent],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
})
export class YoutubeModule {}
