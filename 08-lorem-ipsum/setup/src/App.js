import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleChange = (e) => {
    setCount(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    // set max <p> at 10, if greater sets amount to 10
    if (count > 10) {
      amount = 10
    }
    setText(data.slice(0, amount))
  }
  
  return (
    <section className='section-center'>
      <h3>Hipster Lorem Ipsum Generater</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={handleChange}
        />
        <button className='btn'>make lipsum</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App;
