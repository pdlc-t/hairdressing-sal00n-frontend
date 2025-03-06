import React from 'react';
import '../styles/index.css';

const ColorInput = ({color}) => {

  return (
    <>
      <div className='color-box' style={{'backgroundColor': color, 'borderColor': color}}></div>
    </>
  )
}

export default ColorInput