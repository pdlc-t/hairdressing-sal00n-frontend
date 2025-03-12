import React from 'react'
import Sal00nItemGrid from "../../components/item-card/Sal00nItemGrid";
import classes from './offer-page.module.css'

const OfferPage = () => {
    return (
        <div className={`${classes.container}`}>
            <section className={`${classes.salonGrid}`}>
                <h2>
                    <center>Oferta naszego sal00nu:</center>
                </h2>
                <Sal00nItemGrid />
            </section>
        </div>
    )
}

export default OfferPage
