import React, { useState } from 'react';

// destructuring the properties of the tour object being passed in
const Tour = ({id, image, info, price, name}) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
    </article>
  )
};

export default Tour;
