import { apiDomainName } from "./apiServiceConstant";

const getDashboardAnalytic = () => {
  return fetch(`${apiDomainName}/dashboard-analytic`).then((res) => res.json());
};

export const DashboardApiService = {
  getDashboardAnalytic,
};
