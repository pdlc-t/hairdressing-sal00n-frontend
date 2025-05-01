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
import OfferPage from "./pages/offer-page/OfferPage";
import HairdresserPage from "./pages/hairdressers-page/HairdresserPage";
import './global.css';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<InnerLayout />}>
                <Route path="home" element={<HomePage />} />
                <Route path="make an appointment" element={<MakeAnAppointmentPage />} />
                <Route path="visits history" element={<HistoryPage />} />
                <Route path="browse the offer" element={<OfferPage />} />
                <Route path="królik" element={<KrolikPage />} />
                {/* Nowa trasa do strony fryzjerów */}
                <Route path="hairdressers" element={<HairdresserPage />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

export default App;
