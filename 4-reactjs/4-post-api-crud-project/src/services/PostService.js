import { BASE_API_URL } from "../constant";

const POST_API_ENDPOINTS = {
  GET_POSTS: `${BASE_API_URL}/posts`,
  GET_POST_BY_ID: `${BASE_API_URL}/posts/:postId`,
  CREATE_POST: `${BASE_API_URL}/posts`,
  DELETE_POST_BY_ID: `${BASE_API_URL}/posts/:postId`,
  UPDATE_POST_BY_ID: `${BASE_API_URL}/posts/:postId`,
};

const getPosts = () => {
  return fetch(POST_API_ENDPOINTS.GET_POSTS).then((res) => res.json());
};

const createPost = (payload) => {
  return fetch(POST_API_ENDPOINTS.CREATE_POST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json());
};
const deletePostById = (postId) => {
  return fetch(
    POST_API_ENDPOINTS.DELETE_POST_BY_ID.replace(":postId", postId),
    {
      method: "DELETE",
    }
  ).then((res) => res.json());
};
const editPostDataById = (postId) => {
  return fetch(
    POST_API_ENDPOINTS.GET_POST_BY_ID.replace(":postId", postId)
  ).then((res) => res.json());
};
const updatePost = (postId, payload) => {
  return fetch(
    POST_API_ENDPOINTS.UPDATE_POST_BY_ID.replace(":postId", postId),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  ).then((response) => response.json());
};

export const PostServices = {
  getPosts,
  createPost,
  deletePostById,
  editPostDataById,
  updatePost, // updatePost(postId,payload)
};
