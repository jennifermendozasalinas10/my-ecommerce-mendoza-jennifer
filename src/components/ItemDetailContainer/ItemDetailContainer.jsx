import React, {useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom';
const films = [

  { id: 1, price: 750, image: "https://i.ibb.co/3hw1HRZ/gorros.webp", category:'films', title: "Gorros de lana"},

  { id: 2, price: 650, image: "https://i.ibb.co/6YwjTzJ/medias.jpg", category:'films', title: "Medias de algodón"},

  { id: 3, price: 700, image: "https://i.ibb.co/9bRN0X7/guantes.webp", category:'films', title: "Guantes"},

  { id: 4, price: 600, image: "https://i.ibb.co/SwmL6cH/orejeras.jpg", category:'films', title: "Orejeras"},

  { id: 5, price: 400, image: "https://i.ibb.co/4SNL2rt/scrunchies.webp", category:'films', title: "Scrunchies"},

  { id: 6, price: 850, image: "https://i.ibb.co/NVbmprS/remeraah.jpg", category:'series', title: "Remera deportiva"},

  { id: 7, price: 1900,image: "https://i.ibb.co/RDTwzNq/camperalycra.jpg", category:'series', title: "Conjunto de hombre"},

  { id: 8, price: 1150, image: "https://i.ibb.co/cJRBvwJ/shortt.webp", category:'series', title: "Short de hombre"},

  { id: 9, price: 1100, image: "https://i.ibb.co/wzGL4q5/calzaunder.jpg", category:'series', title: "Calza"},

  { id: 10, price: 800, image: "https://i.ibb.co/Kmr1hSz/biker.jpg", category:'series', title: "Biker"},

  { id: 11, price: 3500, image: "https://i.ibb.co/YPS5Rnk/campera.webp", category:'series', title: "Campera de Lycra"},
];


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
const { detalleId } = useParams();

    useEffect(() => {
      const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(films);
        }, 1000);       
  });

       getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
}, [detalleId])

  return (
    <ItemDetail data={data} />
  );
}


export default ItemDetailContainer;