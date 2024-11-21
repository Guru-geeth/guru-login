import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  user: any;
  token: string | null;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signupUser, (state, action) => ({
    ...state,
    user: {
      email: action.email,
    },
  })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    token: action.token,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
