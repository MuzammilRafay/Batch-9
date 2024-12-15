import { AuthUtils } from "../utils/AuthUtils";
import { apiDomainName } from "./apiServiceConstant";

const storeComment = (payload = {}) => {
  return fetch(`${apiDomainName}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AuthUtils.getUserToken()}`,
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};

const getComments = () => {
  return fetch(`${apiDomainName}/comments`).then((res) => res.json());
};

export const CommentApiService = {
  storeComment,
  getComments,
};
