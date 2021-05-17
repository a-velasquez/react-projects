import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  // id of item being edited
  const [editID, setEditID] = useState(null)
  // set up alert as object
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={() => {}}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
          className='grocery'
          placeholder='e.g. eggs'
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
        </input>
        <button type='submit' className='submit-btn'> 
            button 
        </button>
        </div>
      </form>
    </section>
  )
}
export default App
