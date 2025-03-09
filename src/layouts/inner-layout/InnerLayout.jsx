import React from 'react'
import { Outlet } from 'react-router-dom'
import TabsBar from '../../components/tabs-bar/TabsBar'
import HeadBar from '../../components/head-bar/HeadBar'
import classes from './inner-layout.module.css'

const InnerLayout = () => {
  return (
    <div className={`${classes.outer}`}>
      <aside className={`${classes.left}`}>
        <TabsBar />
      </aside>
      <div className={`${classes.right}`}>
        <header className={`${classes.heading}`}>
          <HeadBar />
        </header>
        <section className={`${classes.main}`}>
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default InnerLayout
