import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Blog from "./Blog";
import Article from "./Article";
function Router() {
  return (
    <BrowserRouter basename="/BlogUserView">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/article/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
