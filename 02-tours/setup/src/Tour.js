import React, { useState } from 'react';

// destructuring the properties of the tour object being passed in
const Tour = ({ id, image, info, price, name, removeTour }) => {
  
  const [readMore, setReadMore] = useState(false)


  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/* since we are toggling pass setReadMore !readMore, essentialy the opposite of the current state of readMore */}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
