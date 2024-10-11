
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNumber } from '../FetchReducer';

const InputComponent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setInputValue(value);
    }
  };

  const handleSubmit = () => {
    dispatch(setNumber(Number(inputValue)));
  };

  return (
    <div>
      <h1>Enter a Number</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white">
        Submit
      </button>
    </div>
  );
};

export default InputComponent;
