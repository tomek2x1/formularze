import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
const [producers, setProducers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/producers/')
    .then(response => response.json())
    .then(data => setProducers(data));
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
