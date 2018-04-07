import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './app-store';

const UPDATE_USER = 'UPDATE_USER';

export interface UserProfile {
  firstName: string;
  lastName: string;
  gender: string;
  isAwesome: boolean;
  awesomenessReason: string;
}

export class UserUpdate implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: UserProfile) { }
}



const initialState = {
  firstName: '',
  lastName: '',
  gender: '',
  isAwesome: false,
  awesomenessReason: ''
};

export const user = (state: UserProfile = initialState, action: UserUpdate) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
};

@Injectable()
export class UserService {
  user$: Observable<UserProfile> = this.store.select('user');
  constructor(private store: Store<AppStore>) {}

  updateUser(user) {
    console.log(user);
    this.store.dispatch(new UserUpdate(user));
  }
}
