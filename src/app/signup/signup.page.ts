import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signupUser } from '../store/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls:['./signup.page.scss']
})
export class SignupPage {
  username = '';
  email = '';
  mobile = '';
  password = '';
  confirmPassword = '';

  constructor(private store: Store, private router: Router) {}

  onSignup() {
    if (this.password === this.confirmPassword) {
      this.store.dispatch(
        signupUser({
          // username: this.username,
          email: this.email,
          // mobile: this.mobile,
          password: this.password,
        })
      );
      alert('Signup successful!');
      this.router.navigate(['/login']);
    } else {
      alert('Passwords do not match!');
    }
  }
}
