import React from 'react'
import '../styles/index.css'

const ColorInput = ({signalColor}) => {
  const handleChange = (e) => {
    signalColor(e.target.value);
  }

  return (
    <div>
      <input type='text' onChange={handleChange} className='color-input' />
    </div>
  )
}

export default ColorInput