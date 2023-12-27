import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [SearchResultComponent],
  imports: [CommonModule, SharedModule],
})
export class YoutubeModule {}
