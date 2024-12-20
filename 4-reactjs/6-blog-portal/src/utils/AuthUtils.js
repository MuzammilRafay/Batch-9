export const TOKEN_NAME = "TOKEN";
export const USER_NAME = "USER_NAME";

const saveToken = (token) => {
  if (!token) {
    return null;
  }

  localStorage.setItem(TOKEN_NAME, token);
};

const saveUserName = (username) => {
  if (!username) {
    return null;
  }

  localStorage.setItem(USER_NAME, username);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_NAME);
  localStorage.removeItem(USER_NAME);
};

const isUserIsLoggedIn = () => {
  const token = localStorage.getItem(TOKEN_NAME);
  if (!token) {
    return false;
  }
  return true;
};

const getUserToken = () => {
  const token = localStorage.getItem(TOKEN_NAME);
  if (!token) {
    return null;
  }
  return token;
};

export const AuthUtils = {
  saveToken,
  removeToken,
  saveUserName,
  isUserIsLoggedIn,
  getUserToken,
};
