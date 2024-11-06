import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontendLayout from "./pages/layout/FrontendLayout";
import PostDetail from "./pages/PostDetail";
import Home from "./pages/Home";
import CategoryDetail from "./pages/CategoryDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/category/:categoryId" element={<CategoryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
