import { createAction, props } from '@ngrx/store';

export const signupUser = createAction(
  '[Auth] Signup User',
  props<{  email: string;  password: string }>()
);

export const loginUser = createAction(
  '[Auth] Login User',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
