import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import Dashbord from "../pages/Dashbord";
// import History from "../pages/History";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* Private Route */}
      {/* <Route path='/dasdbord' element={<Dashbord />} />
      <Route path='/history' element={<History />} /> */}
    </Routes>
  );
};

export default RouteConfig;
