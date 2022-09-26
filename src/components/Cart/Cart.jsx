
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
    <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer otra compra</Link>
    </>
    );
  }

  return (
    <>
       {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
       }
       <p>
          total: {totalPrice()}
       </p>
    </>
  )
}


export default Cart;