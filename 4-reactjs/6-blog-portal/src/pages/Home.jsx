import React, { useEffect, useState } from "react";
import { PostApiService } from "../services/PostApiService";
import SinglePost from "../components/SinglePost/SinglePost";

function Home() {
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

  if (loader) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
      <h1 className="page-header">All Posts</h1>

      {postData?.length > 0 &&
        postData?.map((singlePost) => {
          return (
            <SinglePost singlePost={singlePost} key={singlePost?.post_id} />
          );
        })}
    </>
  );
}

export default Home;
