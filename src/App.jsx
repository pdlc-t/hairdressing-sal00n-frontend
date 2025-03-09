import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import InnerLayout from './layouts/inner-layout/InnerLayout';
import DashboardPage from './pages/dashboard-page/DashboardPage';
import './global.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<InnerLayout />}>
        <Route path="home" element={<DashboardPage />} />
        <Route path="make an appointment" element={<DashboardPage />} />
        <Route path="visits history" element={<DashboardPage />} />
        <Route path="browse the offer" element={<DashboardPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App;
