import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser } from '../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls:['./login.page.scss']
})
export class LoginPage {
  username = '';
  password = '';

  constructor(private store: Store) {}

  onLogin() {
    this.store.dispatch(loginUser({ username: this.username, password: this.password }));
  }
}
