import React, {useState} from 'react';
import "../ItemDetail/ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
  }

  return (
   <div className='container'>
       <div className='detail'>
           <img className='detail__image' src={data.image} alt="Gorros de lana" />
           <div className='content'>
              <h1>{data.title}</h1>
               {
                goToCart
                    ? <Link to='/Cart'>Terminar compra</Link>
                    :<ItemCount initial={1} stock={10} onAdd={onAdd} />
               }
           </div>
        </div>
    </div>
  );
}

export default ItemDetail;