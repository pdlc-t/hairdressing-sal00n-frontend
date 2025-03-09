import React from 'react'
import AccountButton from './AccountButton'
import classes from './head-bar.module.css'

const HeadBar = () => {
  return (
    <div className={`${classes.container}`}>
      <h1>Dashboard</h1>
      <AccountButton />
    </div>
  )
}

export default HeadBar
