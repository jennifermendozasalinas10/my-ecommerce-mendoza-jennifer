import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Title from '../Title/Title';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";



export const ItemListContainer = ({ texto }) => {
  
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();  
    const queryCollection = collection(querydb, 'products');
    
     if (categoriaId) {
     const queryFilter = query(queryCollection, where('category', '==', categoriaId))
    getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data()}))))
   } else {
    getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data()}))))

   }
  
}, [categoriaId])

  

  return (
    <>
       <Title className="text-center" greeting={texto} />
       <section className="container-lg containerProducts ">   
       <ItemList data={data} />
       </section>
    </>

  );
}



export default ItemListContainer;