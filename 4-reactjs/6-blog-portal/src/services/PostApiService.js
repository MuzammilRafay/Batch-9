const apiDomainName = "https://blog-api-testing.squadcodersdev.com/api";

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
