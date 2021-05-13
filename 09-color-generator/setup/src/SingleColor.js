import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bgc = rgb.join(',')
  // const bgc = rgb.toString())
  // console.log(bgc)

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className='percent-value'>
        {weight}
      </p>
    </article>
  )
}

export default SingleColor
