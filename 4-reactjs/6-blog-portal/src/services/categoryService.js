import { apiDomainName } from "./apiServiceConstant";

const getCategories = () => {
  return fetch(`${apiDomainName}/categories`).then((res) => res.json());
};

const getCategoryById = (categoryId) => {
  return fetch(`${apiDomainName}/categories/${categoryId}`).then((res) =>
    res.json()
  );
};

const createCategory = (payload) => {
  return fetch(`${apiDomainName}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};

const updateCategory = (categoryId, payload) => {
  return fetch(`${apiDomainName}/categories/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};
const deleteCategoryById = (catId) => {
  return fetch(`${apiDomainName}/categories/${catId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const CategoryApiService = {
  getCategories,
  getCategoryById,
  createCategory,
  deleteCategoryById,
  updateCategory,
};
