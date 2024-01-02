import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
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
    HttpClientModule,
  ],
})
export class SharedModule {}
