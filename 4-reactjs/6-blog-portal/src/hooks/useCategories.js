import React, { useEffect, useState } from "react";
import { CategoryApiService } from "../services/categoryService";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //intial load
    getCategories();
  }, []);

  const getCategories = () => {
    setLoading(true);

    CategoryApiService.getCategories()
      .then((data) => {
        setCategories(data?.results);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    categories,
    setCategories,
    loading,
    setLoading,
    getCategories,
  };
}

export default useCategories;
