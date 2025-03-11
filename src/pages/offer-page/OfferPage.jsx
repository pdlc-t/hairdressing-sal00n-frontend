import React from 'react'
import Sal00nItemGrid from "../../components/item-card/Sal00nItemGrid";
import classes from './offer-page.module.css'

const OfferPage = () => {
    return (
        <div className={`${classes.container}`}>
            <section className={`${classes.salonGrid}`}>
                <Sal00nItemGrid />
            </section>
        </div>
    )
}

export default OfferPage
