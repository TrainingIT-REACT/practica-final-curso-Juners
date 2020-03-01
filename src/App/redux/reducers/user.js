import { LOGIN_USER_SUCCESS } from "../actions/user";

const initialState = {
  signedIn: false,
  userData: {}
}

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        signedIn: true,
        userData: payload
      };
    default:
      return state;
  }
}

export default user;