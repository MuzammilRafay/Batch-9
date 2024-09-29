import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontendLayout from "./pages/layout/FrontendLayout";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontendLayout />} />
        <Route path="/post/1" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
