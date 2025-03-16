import React from 'react'
import classes from './appointment-calendar.module.css'

const ControlHeader = ({ firstDayOfActiveMonth, setFirstDayOfActiveMonth }) => {
  /* Passing the information about active months change up the tree */
  const changeActiveMonth = (direction) => {
    setFirstDayOfActiveMonth(current => 
      direction 
      ? current.plus({months: 1}).startOf("month") 
      : current.minus({months: 1}).startOf("month"))
  }

  return (
    <div className={`${classes.headControlsContainer}`}>
      <div className={`${classes.controlsContainer}`}>
        <h1 className={`${classes.chooseDate}`}>Choose Date</h1>
        <div className={`${classes.controls}`}>
          <p className={`${classes.monthShiftButton}`} onClick={() => changeActiveMonth(false)}> &lt;&lt; </p>
          <p className={`${classes.monthName}`}>{firstDayOfActiveMonth.monthShort}</p>
          <p className={`${classes.monthShiftButton}`} onClick={() => changeActiveMonth(true)}> &gt;&gt; </p>
        </div>
      </div>
      <div className={`${classes.weekdays}`}>
        <p>Mon</p>
        <p>Tues</p>
        <p>Wed</p>
        <p>Thurs</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
    </div>
  )
}

export default ControlHeader
