import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: any = null;

  switchLoginMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    } else {
      let observable: Observable<AuthResponseData>;
      let email = form.value.email;
      let password = form.value.password;
      if (this.isLoginMode) {
        this.isLoading = true;
        observable = this.authService.signIn(email, password);
      } else {
        this.isLoading = true;
        observable = this.authService.signUp(email, password);
      }
      observable.subscribe(
        (response) => {
          console.log(response);
          this.error = null;
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        (error) => {
          console.log(error);
          this.error = error.error.error.message;
          this.isLoading = false;
        }
      );
      form.reset();
    }
  }
}
