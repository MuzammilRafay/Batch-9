import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import EditPost from "./components/EditPost/EditPost";
import PostListing from "./components/PostListing/PostListing";
import { BASE_API_URL } from "./constant";
import { PostServices } from "./services/PostService";

function App() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editPostData, setEditPostData] = useState(null);

  const getPosts = () => {
    setLoading(true);
    PostServices.getPosts()
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
        <EditPost editPostData={editPostData} setLoading={setLoading}   getPosts={getPosts} />
        <PostListing
          postData={postData}
          loading={loading}
          getPosts={getPosts}
          setLoading={setLoading}
          setEditPostData={setEditPostData}
        />
      </div>
    </>
  );
}

export default App;
