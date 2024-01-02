import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from './components/filters/filters.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';
import { LoggerService } from './services/logger/logger.service';
import { DevLoggerService } from './services/logger/dev-logger.service';
import { ProdLoggerService } from './services/logger/prod-logger.service';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, NotFoundComponent, MainComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
  providers: [
    {
      provide: LoggerService,
      useClass: isDevMode() ? DevLoggerService : ProdLoggerService,
    },
  ],
})
export class CoreModule {}
