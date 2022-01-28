import React from 'react';
import PrivateNavbar from '../layouts/PrivateNavbar'
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
      <>
        <PrivateNavbar />
        <Outlet />
      </>
  );
};

export default PrivateLayout;
