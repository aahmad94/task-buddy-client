import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session';

// want to return if no current user
const _nullSession = {
  currentUser: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    localStorage.setItem("_sms_app_session", action.user.data.session_token);
      return Object.assign({}, {
        currentUser: action.user.data
      });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
