import React, { useState } from 'react';

const Buttoncounter = () => {
  const [counts, setCounts] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const handleClick = (buttonNumber) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [buttonNumber]: prevCounts[buttonNumber] + 1,
    }));
  };

  return (
    <div>
      <h1>Counts:</h1>
      <button onClick={() => handleClick(1)}>Button 1: {counts[1]}</button>
      <button onClick={() => handleClick(2)}>Button 2: {counts[2]}</button>
      <button onClick={() => handleClick(3)}>Button 3: {counts[3]}</button>
      <button onClick={() => handleClick(4)}>Button 4: {counts[4]}</button>
      <button onClick={() => handleClick(5)}>Button 5: {counts[5]}</button>
    </div>
  );
};

export default Buttoncounter;
