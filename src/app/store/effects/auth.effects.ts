import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as AuthActions from '../actions/auth.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginUser),
      mergeMap((action) => {
        if (action.username === 'testuser' && action.password === 'password') {
          const token = jwt.sign({ username: action.username }, 'secret', { expiresIn: '1h' });
          console.log('JWT Token:', token);
          return of(AuthActions.loginSuccess({ token }));
        } else {
          return of(AuthActions.loginFailure({ error: 'Invalid credentials' }));
        }
      })
    )
  );
}
