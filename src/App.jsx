import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import './styles/gloabal.css';

import MainLayout from './Layouts/MainLayout';
import MainDashboard from './pages/MainDashboard';

function App() {

  /* createBrowserRouter based approach allows using loaders and error elements
  in the routing */
  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path="/" element={<MainLayout />} >
        <Route path="/dashboard" element={<MainDashboard />} />
      </Route>
    )
  );

  /* Alternative way of setting up routing (object-based)
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        }
      ]
    }
  ]); */
  
  return <RouterProvider router={router} />
}

export default App;
