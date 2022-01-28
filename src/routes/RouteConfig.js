import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import { AuthContext } from "../contexts/AuthContext";
import PrivateLayout from '../components/layouts/PrivateLayout';
import PublicLayout from "../components/layouts/PublicLayout";
import Home from "../pages/Home";

const RouteConfig = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <Routes>
      {user ? (
        <Route path='dashboard' element={<PrivateLayout />}>
          <Route path='/dasboard' element={<Dashboard />} />
          <Route path='/history' element={<History />} />
        </Route>
      ) : (
        <Route path='/' element={<PublicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      )}
    </Routes>
  );
};

export default RouteConfig;
