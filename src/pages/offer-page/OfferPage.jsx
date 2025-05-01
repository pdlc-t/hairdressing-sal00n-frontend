import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sal00nItemGrid from "../../components/offer-card/Sal00nItemGrid"
import ToggleSwitch from "../../components/button-card/ToggleSwitch"
import classes from './offer-page.module.css'

const OfferPage = () => {
    const [view, setView] = useState('services')

    return (
        <div className={classes.container}>
            <section className={classes.salonGrid}>
                <h2 className={classes.title}>Oferta naszego sal00nu:</h2>
                {/* Pasek narzędzi: przełącznik i przycisk fryzjerzy */}
                <div className={classes.toolbar}>
                    <ToggleSwitch activeView={view} setView={setView} />
                    <Link to="/hairdressers" className={classes.hairdresserBtn}>
                        Zobacz fryzjerów
                    </Link>
                </div>
                {/* Grid z ofertą */}
                <Sal00nItemGrid view={view} />
            </section>
        </div>
    )
}

export default OfferPage