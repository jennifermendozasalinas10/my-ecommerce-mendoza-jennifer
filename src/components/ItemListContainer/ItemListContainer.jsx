import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';
import { useParams } from 'react-router-dom';
const films = [

  { id: 1, image: "https://i.ibb.co/3hw1HRZ/gorros.webp", category:'films', title: "Gorros de lana"},

  { id: 2, image: "https://i.ibb.co/6YwjTzJ/medias.jpg", category:'films', title: "Medias de algodón"},

  { id: 3, image: "https://i.ibb.co/9bRN0X7/guantes.webp", category:'films', title: "Guantes"},

  { id: 4, image: "https://i.ibb.co/SwmL6cH/orejeras.jpg", category:'films', title: "Orejeras"},

  { id: 5, image: "https://i.ibb.co/4SNL2rt/scrunchies.webp", category:'films', title: "Scrunchies"},

  { id: 6, image: "https://i.ibb.co/NVbmprS/remeraah.jpg", category:'series', title: "Remera deportiva"},

  { id: 7, image: "https://i.ibb.co/RDTwzNq/camperalycra.jpg", category:'series', title: "Conjunto de hombre"},

  { id: 8, image: "https://i.ibb.co/cJRBvwJ/shortt.webp", category:'series', title: "Short de hombre"},

  { id: 9, image: "https://i.ibb.co/wzGL4q5/calzaunder.jpg", category:'series', title: "Calza"},

  { id: 10, image: "https://i.ibb.co/Kmr1hSz/biker.jpg", category:'series', title: "Biker"},

  { id: 11, image: "https://i.ibb.co/YPS5Rnk/campera.webp", category:'series', title: "Campera de Lycra"},
  
 ];

export const ItemListContainer = ({ texto }) => {
  
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
           resolve(films); 
        }, 1000);
  });
    if(categoriaId) {
    getData.then(res => setData(res.filter(film => film.category === categoriaId)));
  } else {
    getData.then(res => setData(res));
  }
}, [categoriaId])

  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  }

  return (
    <>
       <Title greeting={texto} />
       <ItemCount initial={1} stock={10} onAdd={onAdd} />    
       <ItemList data={data} />
    </>

  );
}

export default ItemListContainer;