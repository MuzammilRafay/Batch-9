import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import EditPost from "./components/EditPost/EditPost";
import PostListing from "./components/PostListing/PostListing";
import { BASE_API_URL } from "./constant";

function App() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPosts = () => {
    setLoading(true);
    fetch(`${BASE_API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPostData(data?.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="container">
        <h1>Posts</h1>
        <CreatePost getPosts={getPosts} />
        <EditPost />
        <PostListing
          postData={postData}
          loading={loading}
          getPosts={getPosts}
          setLoading={setLoading}
        />
      </div>
    </>
  );
}

export default App;
