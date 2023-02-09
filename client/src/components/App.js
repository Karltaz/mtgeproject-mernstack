
import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import AdminDashboard from "./AdminDashboard";
import AdminEditProduct from "./AdminEditProduct";
import UserDashboard from "./UserDashboard";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import NotFound from "./NotFound";
import Shop from "./Shop";





const App = () => {
 

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="register" element={<Signup />} />
          <Route path="login" element={<Signin />} />
          <Route path="/user/dashboard" element={<UserRoute><UserDashboard /></UserRoute>} />
          <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/edit/product/:productId" element={<AdminRoute><AdminEditProduct /></AdminRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
