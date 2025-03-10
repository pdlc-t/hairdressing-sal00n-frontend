import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import InnerLayout from './layouts/inner-layout/InnerLayout';
import HomePage from './pages/home-page/HomePage';
import KrolikPage from './pages/krolik-page/KrolikPage';
import './global.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<InnerLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="make an appointment" element={<HomePage />} />
        <Route path="visits history" element={<HomePage />} />
        <Route path="browse the offer" element={<HomePage />} />
        <Route path="królik" element={<KrolikPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App;
