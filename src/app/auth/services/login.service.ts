import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('user-credentials');
  }
}
