import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [colorHex, setColorHex] = useState('');

  const randArr = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6];
  let newColor = [];

  useEffect(() => {

    for (let i = 0; i < 6; i++) {

      const randIndex = Math.floor(Math.random() * 11);
    
      newColor.push(randArr[randIndex]);

    }

    setColorHex('#' + newColor.join('').toUpperCase());

  }, []);

  const randomColor = () => {

    for (let i = 0; i < 6; i++) {

      const randIndex = Math.floor(Math.random() * 11);
    
      newColor.push(randArr[randIndex]);

    }

    setColorHex('#' + newColor.join('').toUpperCase());

  }

  return (
    <div className="app">
      
      <div className="mainButton">
        <button onClick={randomColor}>
          Colorize
        </button>
        <div></div>
      </div>

      <div style={{backgroundColor: colorHex}} className="colorBackground">
        <div>
          { colorHex }
        </div>
      </div>

    </div>
  );
}

export default App;
