
import "../Item/Item.css";

import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({info}) => {

    
  return (
    <>
       <Link to={`/detalle/${info.id}`} className='film'>
            <img src={info.image} alt='Gorros de lana'/>
            <p>info.title</p>
       </Link>
    </>
  )
}


export default Item;