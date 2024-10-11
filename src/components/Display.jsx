
import React from 'react';
import { useSelector } from 'react-redux';

const DisplayComponent = () => {
  const number = useSelector((state) => state.input.number);
  console.log(number);
  

  return (
    <div>
    <h2>{number}</h2>
    </div>
  );
};

export default DisplayComponent;
