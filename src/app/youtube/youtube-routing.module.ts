import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchResultComponent } from './pages/search-result/search-result.component';

const routes: Routes = [{ path: '', component: SearchResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
