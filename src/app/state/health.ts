import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './app-store';

const UPDATE_HEALTH = 'UPDATE_HEALTH';

export interface HealthProfile {
  height: number;
  weight: number;
  bmi: number;
}

const initialState = {
  height: null,
  weight: null,
  bmi: null
};

export class HealthUpdate implements Action {
  readonly type = UPDATE_HEALTH;
  constructor(public payload: HealthProfile) { }
}

export const health = (state: HealthProfile = initialState, action: HealthUpdate) => {
  console.log(action.type);
  switch (action.type) {
    case UPDATE_HEALTH:
      return action.payload;
    default:
      return state;
  }
};

@Injectable()
export class HealthService {
  health$: Observable<HealthProfile> = this.store.select('health');
  constructor(private store: Store<AppStore>) {}

  updateHealth(health) {
    console.log(health);
    this.store.dispatch(new HealthUpdate(health));
  }
}
