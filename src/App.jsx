import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import InnerLayout from './layouts/inner-layout/InnerLayout';
import HomePage from './pages/home-page/HomePage';
import MakeAnAppointmentPage from './pages/make-an-appointment-page/MakeAnAppointmentPage';
import KrolikPage from './pages/krolik-page/KrolikPage';
import HistoryPage from './pages/history-page/HistoryPage';
import './global.css';
import OfferPage from "./pages/offer-page/OfferPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<InnerLayout />}>
        <Route path="home" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="make an appointment" element={<HomePage />} />
        <Route path="visits history" element={<HistoryPage />} />
        <Route path="browse the offer" element={<OfferPage />} />
=======
        <Route path="make an appointment" element={<MakeAnAppointmentPage />} />
        <Route path="visits history" element={<HomePage />} />
        <Route path="browse the offer" element={<HomePage />} />
>>>>>>> 617be06 (Added MakeAnAppointmentPage and calendar grid with spinning days.)
        <Route path="królik" element={<KrolikPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App;
