import React, { useEffect } from 'react'

const Alert = ({ msg, type, list }) => {
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
