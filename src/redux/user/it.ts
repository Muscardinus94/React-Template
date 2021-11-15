export interface UserStateInterface {
  accessToken: string;
}

export type UserActionTypesKeyValue = 'USER/SET_ACCESS_TOKEN';

export type UserActionTypes = {
  [key in UserActionTypesKeyValue]: UserActionTypesKeyValue;
};
