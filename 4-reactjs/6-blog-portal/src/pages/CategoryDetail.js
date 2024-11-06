import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryApiService } from "../services/categoryService";
import SinglePost from "../components/SinglePost/SinglePost";

function CategoryDetail() {
  const [posts, setPosts] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      CategoryApiService.getCategoryById(categoryId)
        .then((data) => {
          setPosts(data?.results?.posts);
          setCategoryData(data?.results);
        })
        .catch(console.error);
    }
  }, [categoryId]);

  console.log(posts, "posts");
  return (
    <div>
      <h2>Category : {categoryData?.cat_title}</h2>

      {posts?.length > 0 &&
        posts?.map((singlePost) => <SinglePost singlePost={singlePost} />)}
    </div>
  );
}

export default CategoryDetail;
