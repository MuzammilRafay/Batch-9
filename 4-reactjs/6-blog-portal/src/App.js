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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
