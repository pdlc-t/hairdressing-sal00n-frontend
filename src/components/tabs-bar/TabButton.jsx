import React from 'react'
import { Link } from 'react-router-dom'
import classes from './tabs-bar.module.css'

const TabButton = ({text, isActive, setActive }) => {

  return (
    <Link 
      className={`${classes.tab} ${isActive ? classes.active : ''}`} 
      onClick={() => setActive(text)}
      to={`/${text.toLowerCase()}`}
    >{text}</Link>
  )
}

export default TabButton
