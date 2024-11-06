import { apiDomainName } from "./apiServiceConstant";

const getCategories = () => {
  return fetch(`${apiDomainName}/categories`).then((res) => res.json());
};

const getCategoryById = (categoryId) => {
  return fetch(`${apiDomainName}/categories/${categoryId}`).then((res) =>
    res.json()
  );
};

export const CategoryApiService = {
  getCategories,
  getCategoryById,
};
