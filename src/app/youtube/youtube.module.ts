import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { CustomItemComponent } from './pages/custom-item/custom-item.component';

@NgModule({
  declarations: [SearchResultComponent, DetailedInformationComponent, CustomItemComponent],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
})
export class YoutubeModule {}
