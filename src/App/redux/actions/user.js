export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const login = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};