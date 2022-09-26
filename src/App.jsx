import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';

import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';



function App() {
  return (
  <>

    <BrowserRouter>      
      <CartProvider>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
