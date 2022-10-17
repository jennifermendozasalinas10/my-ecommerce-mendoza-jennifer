import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

import "./ItemDetail.css";
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
 
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }
return (
    <div className='container container-lg'>
       <div className='imgDetail'>
         <img src={data.image} alt="imagen del producto" />
          <div className='countDetail'>
            <h1>{data.title}</h1>
            
          {
           goToCart

               ? <Link type="button" className="btn btn-primary" to='/Cart'>Terminar compra</Link>
               :<ItemCount initial={1} stock={10} onAdd={onAdd} />
          }
          </div>
       </div>
     </div>

  );
 }



export default ItemDetail;