import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarRoutes = ['/userdashboard', '/admindashboard'];

  const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
