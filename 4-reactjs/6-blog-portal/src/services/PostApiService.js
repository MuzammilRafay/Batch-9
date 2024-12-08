import { apiDomainName } from "./apiServiceConstant";

const getPostApi = () => {
  return fetch(`${apiDomainName}/posts`).then((res) => res.json());
};

const searchPostApi = (payload = {}) => {
  return fetch(`${apiDomainName}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};

const getPostById = (postId) => {
  return fetch(`${apiDomainName}/posts/${postId}`).then((res) => res.json());
};

const deletePostById = (postId) => {
  return fetch(`${apiDomainName}/posts/${postId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

const createPost = (payload) => {
  return fetch(`${apiDomainName}/posts`, {
    method: "POST",
    body: payload,
  }).then((res) => res.json());
};

export const PostApiService = {
  getPostApi,
  getPostById,
  searchPostApi,
  deletePostById,
  createPost,
};
