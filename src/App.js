import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

// import PageSignIn from "./pages/signin/index";
// import DashBoard from "./pages/dashboard/index";
// import PageCategories from "./pages/categories";
// import PageCategoriesCreate from "./pages/categories/create";
// import PageCategoriesEdit from "./pages/categories/edit";
import { listen } from "./redux/listener";
import { AppRoutes } from "./routes";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
