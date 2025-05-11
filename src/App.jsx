import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import InnerLayout from './layouts/inner-layout/InnerLayout';
import HomePage from './pages/home-page/HomePage';
import MakeAnAppointmentPage from './pages/make-an-appointment-page/MakeAnAppointmentPage';
import KrolikPage from './pages/krolik-page/KrolikPage';
import HistoryPage from './pages/history-page/HistoryPage';
import OfferPage from './pages/offer-page/OfferPage';
import HairdresserPage from './pages/hairdressers-page/HairdresserPage';
import LoginPage from './pages/login-page/LoginPage';
import RegisterPage from './pages/register-page/RegisterPage';
import LandingPage from './pages/landing-page/LandingPage';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import './global.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Routes */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <InnerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} /> {/* Default route for "/" */}
          <Route path="home" element={<HomePage />} />
          <Route path="make an appointment" element={<MakeAnAppointmentPage />} />
          <Route path="visits history" element={<HistoryPage />} />
          <Route path="browse the offer" element={<OfferPage />} />
          <Route path="królik" element={<KrolikPage />} />
          <Route path="hairdressers" element={<HairdresserPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;