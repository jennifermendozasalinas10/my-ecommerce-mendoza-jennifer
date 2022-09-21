import React from 'react'

const Item = ({info}) => {
  return (
    <>
    <a href='' className='film'>
      <img src={info.image} alt='Gorros de lana'/>
      <p>info.title</p>
    </a>
    </>
  );
}

export default Item