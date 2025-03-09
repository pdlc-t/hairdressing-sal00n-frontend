import React from 'react'
import user from '../../assets/svg_images/other_icons/user.svg'
import classes from './head-bar.module.css'

const AccountButton = () => {
  return (
    <div className={`${classes.accountButton}`}>
      <h2 >
        User
      </h2>
      <img src={user} alt="user icon"/>
      
    </div>
  )
}

export default AccountButton