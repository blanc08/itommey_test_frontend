import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitNumbers } from './actions/numbersAction';

function App() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitNumbers(value));
    navigate(`/result`);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>test</h1>
      <hr />
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

export default App;
