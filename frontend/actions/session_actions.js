import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logOutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = signupInfo => dispatch => {
  return SessionAPIUtil.signup(signupInfo)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const login = loginInfo => dispatch => {
  return SessionAPIUtil.login(loginInfo)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(logOutCurrentUser()))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};
