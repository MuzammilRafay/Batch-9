import { apiDomainName } from "./apiServiceConstant";

const getPostApi = () => {
  return fetch(`${apiDomainName}/posts`).then((res) => res.json());
};

const getPostById = (postId) => {
  return fetch(`${apiDomainName}/posts/${postId}`).then((res) => res.json());
};

export const PostApiService = {
  getPostApi,
  getPostById,
};
