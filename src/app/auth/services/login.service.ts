import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginStatus$ = new BehaviorSubject<boolean>(this.isUserLoggedIn());

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('user-credentials');
  }
}
