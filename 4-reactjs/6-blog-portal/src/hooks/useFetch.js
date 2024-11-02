import React, { useEffect, useState } from "react";

function useFetch({ fetchFunction = () => {}, params = {} }) {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    fetchFunction(params)
      ?.then((data) => {
        setData(data?.results);
      })
      ?.catch(console.error)
      ?.finally(() => {
        setLoader(false);
      });
  }, [fetchFunction, params]);
  return [data, loader];
}

export default useFetch;
