import { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorInput from './components/ColorInput'

function App() {
  const [color, setColor] = useState('cyan');

  const handleColorChange = (newColor) => {
    setColor(newColor);
  }

  return (
    <div>
      <ColorBox color={color} />
      <ColorInput signalColor={handleColorChange} />
    </div>
  );
}

export default App;
