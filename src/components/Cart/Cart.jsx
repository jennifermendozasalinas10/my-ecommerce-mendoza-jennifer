import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

import "./Cart.css";


const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  
  const order ={
    buyer: {
      name: 'Jennifer',
      email: 'Soysolange10@gmail.com',
      phone: '115796911',
      address: '123456',
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id))
  }

  if (cart.length === 0) {
    return (
    <div className='cart-message'>
        <p>No hay elementos en el carrito</p>
        <Link to='/' className="btn btn-primary">Ir a comprar</Link>
    </div>
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
       <button onClick={handleClick}>Generar orden</button>
    </>
  )
}


export default Cart;