import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ColoredBorderDirective } from './directives/colored-border.directive';
import { SearchItemComponent } from './components/search-item/search-item.component';

@NgModule({
  declarations: [ColoredBorderDirective, SearchItemComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  exports: [
    ColoredBorderDirective,
    SearchItemComponent,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
