import { apiDomainName } from "./apiServiceConstant";

const registerUser = (payload) => {
  return fetch(`${apiDomainName}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};

export const UserApiService = {
  registerUser,
};
