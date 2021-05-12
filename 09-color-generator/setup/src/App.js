import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='color'
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
    </>
  )
}

export default App
