import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

///*** Error Handling
import { receiveSessionErrors, clearSessionErrors } from './error_actions';
///***

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logOutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const signup = signupInfo => dispatch => {
  return SessionAPIUtil.signup(signupInfo)
    .then(user => dispatch(receiveCurrentUser(user)))
    .then(user => dispatch(clearSessionErrors()))
    .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const login = loginInfo => dispatch => {
  return SessionAPIUtil.login(loginInfo)
    .then(user => dispatch(receiveCurrentUser(user)))
    .then(user => dispatch(clearSessionErrors()))
    .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(logOutCurrentUser()))
    .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};
