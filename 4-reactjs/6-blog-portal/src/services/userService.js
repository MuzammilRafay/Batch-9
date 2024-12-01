import { apiDomainName } from "./apiServiceConstant";

const registerUser = (payload) => {
  return fetch(`${apiDomainName}/register`, {
    method: "POST",
    // headers: {
    //   // "Content-Type": "application/json",
    //   "Content-Type": "multipart/formdata",
    // },
    // body: JSON.stringify(payload),
    body: payload,
  }).then((res) => res.json());
};

const updateUser = (userId, payload) => {
  return fetch(`${apiDomainName}/users/${userId}`, {
    method: "PUT",
    // headers: {
    //   // "Content-Type": "application/json",
    //   "Content-Type": "multipart/formdata",
    // },
    // body: JSON.stringify(payload),
    body: payload,
  }).then((res) => res.json());
};

const loginUser = (payload) => {
  return fetch(`${apiDomainName}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};

const getUsers = () => {
  return fetch(`${apiDomainName}/users`).then((res) => res.json());
};
const deleteUserById = (userId) => {
  return fetch(`${apiDomainName}/users/${userId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

const getUserById = (userId) => {
  return fetch(`${apiDomainName}/users/${userId}`).then((res) => res.json());
};

export const UserApiService = {
  registerUser,
  loginUser,
  getUsers,
  deleteUserById,
  updateUser,
  getUserById,
};
