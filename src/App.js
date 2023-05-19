import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageSignIn from "./pages/signin/index";
import DashBoard from "./pages/dashboard/index";
import PageCategories from "./pages/categories";
import PageCategoriesCreate from "./pages/categories/create";
import PageCategoriesEdit from "./pages/categories/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="signin" element={<PageSignIn />} />
        <Route path="/categories" element={<PageCategories />} />
        <Route path="/categories/create" element={<PageCategoriesCreate />} />
        <Route path="/categories/edit/:id" element={<PageCategoriesEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
