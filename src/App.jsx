import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
