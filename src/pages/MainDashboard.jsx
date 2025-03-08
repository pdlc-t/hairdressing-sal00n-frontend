import React from 'react'

import UpcomingAppointmentsList from '../components/UpcomingAppointmentsList';
import TilesGrid from '../components/TilesGrid';

import '../styles/dashboard.css';

const MainDashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <UpcomingAppointmentsList />
        <TilesGrid />
      </div>
    </>
  )
};

export default MainDashboard;