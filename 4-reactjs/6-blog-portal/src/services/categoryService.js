import { apiDomainName } from "./apiServiceConstant";

const getCategories = () => {
  return fetch(`${apiDomainName}/categories`).then((res) => res.json());
};

export const CategoryApiService = {
  getCategories,
};
