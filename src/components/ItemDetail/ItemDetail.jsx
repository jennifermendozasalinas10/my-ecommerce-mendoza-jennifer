import React from 'react';
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({data}) => {
  return (
   <div className='container'>
       <div className='detail'>
           <img className='detail__image' src={data.image} alt="Gorros de lana" />
           <div className='content'>
              <h1>{data.title}</h1>
           </div>
        </div>
    </div>
  );
}

export default ItemDetail;