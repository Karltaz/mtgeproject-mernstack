
import React from "react";
import { BrowserRouter   , Route, Routes, } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import NotFound from "./NotFound";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="register" element={<Signup/>} />
        <Route  path="login" element={<Signin/>}/>
         <Route  path="*" element={<NotFound/>} />
         </Routes>
    </main>
  </BrowserRouter>
)

export default App;
