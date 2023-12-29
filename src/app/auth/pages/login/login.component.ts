import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.model';
import { passwordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected loginForm = this.fb.group({
    userEmail: ['', [Validators.required, Validators.email]],
    userPassword: ['', [Validators.required, passwordValidator]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  get userEmail(): AbstractControl {
    return this.loginForm.get('userEmail')!;
  }

  get userPassword(): AbstractControl {
    return this.loginForm.get('userPassword')!;
  }

  submitForm(): void {
    localStorage.setItem('user-credentials', JSON.stringify(this.loginForm.value as IUser));
    this.router.navigate(['/']);
  }
}
