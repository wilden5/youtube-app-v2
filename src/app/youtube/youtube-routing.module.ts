import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { CustomItemComponent } from './pages/custom-item/custom-item.component';

const routes: Routes = [
  { path: '', component: SearchResultComponent },
  { path: 'create-item', component: CustomItemComponent },
  { path: ':id', component: DetailedInformationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
