import React, { useState } from 'react'
import TabButton from './TabButton'
import classes from './tabs-bar.module.css'

const TabsBar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className={`${classes.container}`}>
      <header className={`${classes.heading}`}>
        <h1>Fryzjerska Sal00na</h1>
      </header>
      <section className={`${classes.tabs}`}>

        <ul className={`${classes.tabsList}`}>
          {/* Generate the tabs with passing tab activation function down */}
          {["Home", "Make an appointment", "Visits history", "Browse the offer", "Królik"].map((tab, index) => (
            <li key={index} >
              <TabButton text={tab} isActive={activeTab === tab} setActive={setActiveTab}  />
            </li>
          ))}
        </ul>

      </section>
    </div>
  )
}

export default TabsBar
