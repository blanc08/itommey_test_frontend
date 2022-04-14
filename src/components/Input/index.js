import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitNumbers } from '../../actions/numbersAction';

export default function InputNumber() {
  const [value, setValue] = useState('');
  const { submitNumbersResult } = useSelector((state) => state.numbers);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(submitNumbers(value));
  };

  useEffect(() => {}, [submitNumbersResult]);

  return (
    <div>
      <h5>Seperate numbers with comma</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
