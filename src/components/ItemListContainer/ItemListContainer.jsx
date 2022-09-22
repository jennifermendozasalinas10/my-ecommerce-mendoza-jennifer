import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';

const films = [
 { id: 1, image: "https://i.ibb.co/3hw1HRZ/gorros.webp", title: "Gorros de lana"},
 { id: 2, image: "https://i.ibb.co/6YwjTzJ/medias.jpg", title: "Medias de algodón"},
 { id: 3, image: "https://i.ibb.co/9bRN0X7/guantes.webp", title: "Guantes"},
];

export const ItemListContainer = ({ texto }) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
           resolve(films); 
        }, 3000);
    });
    getData.then(res => setData(res));
},[])

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