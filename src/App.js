import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [colors, setColors] = useState(Array(9).fill("white"));
  const [clickedOrder, setClickedOrder] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleClick = (index) => {
    let newColors = [...colors];
    let newClickedOrder = [...clickedOrder];

    if (!newClickedOrder.includes(index)) {
      newClickedOrder.push(index);
      newColors[index] = "green";
      setClickedOrder(newClickedOrder);
      setColors(newColors);
    }

    setCounter(counter + 1);

    if (counter === 8) {
      let delay = 0;
      newClickedOrder.forEach((clickedIndex) => {
        setTimeout(() => {
          newColors[clickedIndex] = "orange";
          setColors([...newColors]);
        }, delay);
        delay += 500;
      });
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="matrix">
        {colors.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default App;
