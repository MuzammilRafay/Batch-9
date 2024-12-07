import React, { useEffect, useState } from "react";
import { PostApiService } from "../services/PostApiService";

function usePosts() {
  const [postData, setPostData] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    //intial render
    getPosts();
  }, []);
  const getPosts = () => {
    setLoader(true);
    PostApiService.getPostApi()
      .then((data) => {
        setPostData(data?.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return {
    postData,
    loader,
    setLoader,
    getPosts,
  };
}

export default usePosts;
