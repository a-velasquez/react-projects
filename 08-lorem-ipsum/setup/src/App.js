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
    <section className='section-center'>
      <h3>Hipster Lorem Ipsum Generater</h3>
      <form className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={handleChange}
        />
      </form>
    </section>
  )
}

export default App;
