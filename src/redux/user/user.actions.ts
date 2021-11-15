import { AnyAction } from 'redux';
import UserAction from './user.types';

export const setAccessToken = (payload: string): AnyAction => ({
  type: UserAction['USER/SET_ACCESS_TOKEN'],
  payload,
});
