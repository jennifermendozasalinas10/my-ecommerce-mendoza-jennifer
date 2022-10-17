
import "../Item/Item.css";

import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ info }) => {
  const { name, description, price, image } = info;

  return (
    <div className="link">
      <Link to={`/detalle/${info.id}`} className='film'>  
            <img
              src={image}
              className="card-img-top"
              alt="Imagen de Producto"
            />
        <div className="counter link__item" style={{ width: "15rem" }}>
          <div className="counter__content">
            <h5 className="card-title">{name}</h5>
          
            <p>{description}</p>
            <h6>${price}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};


export default Item;