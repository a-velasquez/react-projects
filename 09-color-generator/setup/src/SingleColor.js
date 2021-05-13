import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bgc = rgb.join(',')
  const hex = `#${hexColor}`
  console.log(hex)
  console.log(bgc)
  // const bgc = rgb.toString())
  // console.log(bgc)

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      // in-line style using javascript {} using template string to call css rgb function rgb() and pass rgb values through const bgc as arg using interpolation
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className='percent-value'>
        {weight}
      </p>
      <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor
