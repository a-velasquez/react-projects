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
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // showAlert
    } else if (name && isEditing) {
      // setList 
    } else {
      // showAlert 'success'
      // setList
    }
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list={list}/>}
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
            {isEditing ? 'edit' : 'add'}
        </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>
          clear
        </button>
      </div>
    </section>
  )
}
export default App
