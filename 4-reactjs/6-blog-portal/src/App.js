import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontendLayout from "./pages/layout/FrontendLayout";
import PostDetail from "./pages/PostDetail";
import Home from "./pages/Home";
import CategoryDetail from "./pages/CategoryDetail";
import SearchPost from "./pages/SearchPost";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/category/:categoryId" element={<CategoryDetail />} />
          <Route path="/search/:searchValue" element={<SearchPost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
