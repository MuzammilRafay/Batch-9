import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DashboardApiService } from "../../services/DashboardApiService";
import { Spin } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};
const labels = [
  "Post Count",
  "Comments Count",
  "Users Count",
  "Category Count",
];

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    //initial load
    setLoading(true);
    DashboardApiService.getDashboardAnalytic()
      .then((data) => {
        setDashboardData(data?.results);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const { post_count, comment_count, user_count, category_count } =
    dashboardData;

  const data = {
    labels,

    datasets: [
      {
        label: "Total Counts",
        data: [post_count, comment_count, user_count, category_count],
        backgroundColor: ["red", "blue", "yellow", "purple"],
      },
    ],
  };
  return (
    <Spin spinning={loading}>
      <h2>Dashboard</h2>

      <Bar options={options} data={data} />
    </Spin>
  );
}

export default Dashboard;
