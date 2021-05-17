import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bgc = rgb.join(',')
  const hex = `#${hexColor}`
  // const bgc = rgb.toString())

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      // in-line style using javascript {} using template string to call css rgb function rgb() and pass rgb values through const bgc as arg using interpolation
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {/* conditional rendering */}
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
