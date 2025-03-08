import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';
import TabsSideBar from '../components/TabsSideBar';
// import Footer from '../components/Footer';

import '../styles/main-layout.css';

const MainLayout = () => {
  return (
    <>
      <div className="outer">
        <NavBar />
        <div className="inner">
          <TabsSideBar />
          <div className="main">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
};

export default MainLayout;