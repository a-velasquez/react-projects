import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleChange = (e) => {
    setCount(e.target.value)
    console.log(e.target.value)
  }
  
  return (
  <h2>lorem ipsum project setup</h2>
    )
}

export default App;
