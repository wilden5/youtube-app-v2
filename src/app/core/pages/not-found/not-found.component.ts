import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  protected pagePath: string;

  constructor(private router: Router) {
    this.pagePath = this.router.url;
  }
}
