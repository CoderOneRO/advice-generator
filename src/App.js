import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');
  const [id, setId] = useState('');

  const fetchAdvice = useCallback(() => {
    axios.get('https://api.adviceslip.com/advice')
      .then(res => { 
        setAdvice(res.data.slip.advice);
        setId(res.data.slip.id)
      })
  }, [])

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice])

  return (
    <div className="App">
    <div className="card">
      <p className="id">ADVICE #{id}</p>
      <h2 className="advice">"{advice}"</h2>
      <button onClick={fetchAdvice}>Advice</button>
    </div>
    </div>
  );
}

export default App;
