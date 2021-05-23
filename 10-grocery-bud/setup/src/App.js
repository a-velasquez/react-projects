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
      showAlert(true, 'danger', 'please enter a value')
    } else if (name && isEditing) {
      // setList 
    } else {
      showAlert(true, 'success', 'item add to list')
      const newItem = { id: new Date().getTime().toString(), title: name }
      console.log(newItem)
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'list is cleared')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list={list} removeAlert={showAlert}/>}
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
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem}/>
          <button className='clear-btn' onClick={clearList}>
            clear
          </button>
        </div>
      )}
    </section>
  )
}
export default App
