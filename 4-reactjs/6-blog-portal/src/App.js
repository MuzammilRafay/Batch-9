import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontendLayout from "./pages/layout/FrontendLayout";
import PostDetail from "./pages/PostDetail";
import Home from "./pages/Home";
import CategoryDetail from "./pages/CategoryDetail";
import SearchPost from "./pages/SearchPost";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminLayout from "./pages/admin/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Categories from "./pages/admin/Categories";
import CategoryAdd from "./pages/admin/CategoryAdd";
import Users from "./pages/admin/Users";
import { AuthUtils } from "./utils/AuthUtils";
import Posts from "./pages/admin/Posts";
import AddEditPost from "./pages/admin/AddEditPost";

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

        {/* ADMIN ROUTES */}
        {AuthUtils.isUserIsLoggedIn() && (
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />

            <Route path="/categories/create" element={<CategoryAdd />} />
            <Route
              path="/categories/edit/:categoryId"
              element={<CategoryAdd />}
            />

            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<Register isUserModule />} />
            <Route
              path="/users/edit/:userId"
              element={<Register isUserModule />}
            />

            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/create" element={<AddEditPost />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
