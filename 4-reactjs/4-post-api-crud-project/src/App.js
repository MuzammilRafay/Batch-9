import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import EditPost from "./components/EditPost/EditPost";
import PostListing from "./components/PostListing/PostListing";

function App() {
  return (
    <>
      <div className="container">
        <h1>Posts</h1>
        <CreatePost />
        <EditPost />
        <PostListing />
      </div>
    </>
  );
}

export default App;
