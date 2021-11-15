import { AnyAction } from 'redux';

import { UserStateInterface } from './it';
import UserAction from './user.types';

const INITIAL_STATE: UserStateInterface = {
  accessToken: '',
};

const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case UserAction['USER/SET_ACCESS_TOKEN']:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
