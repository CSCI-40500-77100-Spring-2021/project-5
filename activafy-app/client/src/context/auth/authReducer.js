import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

export default (state, action) => {
  switch(action.type) {
      case USER_LOADED:
          return {
              ...state,
              isAuthenticated: true,
              loading: false,
              user: action.payload
          };
      case SIGNUP_SUCCESS:
      case LOGIN_SUCCESS:
          localStorage.setItem('token', action.payload.jwt);
          return {
              ...state,
              ...action.payload,
              isAuthenticated: true,
              loading: false
          };
      case SIGNUP_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
          localStorage.removeItem('token');
          return {
              ...state,
              token: null,
              isAuthenticated: false,
              loading: false,
              user: null,
              error: action.payload
          };
      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          };
      // case LOGOUT:
      //     localStorage.removeItem('token');
      //     return {
      //         ...state,
      //         token: null,
      //         isAuthenticated: false,
      //         user: null
      //     };
      default:
          return state;
  }
};