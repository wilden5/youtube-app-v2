import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { SharedModule } from '../shared/shared.module';
import { FavoriteRoutingModule } from './favorite-routing.module';

@NgModule({
  declarations: [FavoriteComponent],
  imports: [CommonModule, SharedModule, FavoriteRoutingModule],
})
export class FavoriteModule {}
