
  export const loginUser = (payload) => ({
    payload,
    type: 'LOGIN_USER',
})
export const loginSuccess = (payload) => ({
  type: 'LOGIN_SUCCESS',
  payload,
});
export const loginError = (payload) => ({
  type: 'LOGIN_ERROR',
  payload,
});
export const registerUser = (payload) => ({
  payload,
  type: 'REGISTER_USER',
})
export const registerSuccess = (payload) => ({
type: 'REGISTER_SUCCESS',
payload,
});
export const registerError = (payload) => ({
type: 'REGISTER_ERROR',
payload,
});
export const changePasswordError = (payload) => ({
  type: 'CHANGE_PASSWORD_ERROR',
  payload,
});
export const changePasswordSuccess = (payload) => ({
  type: 'CHANGE_PASSWORD_SUCCESS',
  payload,
});
export const changePasswordWithToken = (payload) => ({
  type: 'CHANGE_PASSWORD',
  payload,
});
export const logout_user = (payload) => ({
  type: 'LOGOUT_USER',
  payload,
});