import React, { useEffect, useState } from "react";
import { PostApiService } from "../services/PostApiService";
import SinglePost from "../components/SinglePost/SinglePost";
import usePosts from "../hooks/usePosts";

function Home() {
  const { loader, postData } = usePosts();

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
