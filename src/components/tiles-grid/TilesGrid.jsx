import React from 'react'
import ServiceTile from './ServiceTile'
import classes from './tiles-grid.module.css'
import leaf from '../../assets/svg_images/tile_icons/leaf.svg'

const TilesGrid = () => {
  return (
    <div className={`${classes.container}`}>
      <h1>Quick Actions</h1>
      <section className={`${classes.tilesContainer}`}>
        <ServiceTile image={leaf} />
        <ServiceTile image={leaf} />
        <ServiceTile image={leaf} />
        <ServiceTile image={leaf} />
        <ServiceTile image={leaf} />
        <ServiceTile image={leaf} />
        <ServiceTile image={leaf} />
        <ServiceTile image={leaf} />
        <ServiceTile image={leaf} />
      </section>
    </div>
  )
}

export default TilesGrid
