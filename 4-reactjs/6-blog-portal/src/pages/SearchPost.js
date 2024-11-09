import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryApiService } from "../services/categoryService";
import SinglePost from "../components/SinglePost/SinglePost";
import { PostApiService } from "../services/PostApiService";

function SearchPost() {
  const [posts, setPosts] = useState([]);
  const { searchValue } = useParams();

  useEffect(() => {
    if (searchValue) {
      PostApiService.searchPostApi({
        query_custom: searchValue,
      })
        .then((data) => {
          setPosts(data?.results);
        })
        .catch(console.error);
    }
  }, [searchValue]);

  return (
    <div>
      <h2>Search : {searchValue}</h2>

      {posts?.length > 0 &&
        posts?.map((singlePost) => (
          <SinglePost singlePost={singlePost} key={singlePost?.post_id} />
        ))}
    </div>
  );
}

export default SearchPost;
