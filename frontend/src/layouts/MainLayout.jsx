import React from 'react';
import CollegeNavbar from '../components/CollegeNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ loading }) => {
  return (
    <>
      <CollegeNavbar />
      <Outlet />
      <Footer />
      <Copyright />
      <ToastContainer />
    </>
  );
};

export default MainLayout;