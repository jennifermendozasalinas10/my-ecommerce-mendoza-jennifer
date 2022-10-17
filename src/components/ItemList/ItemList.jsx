import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data = []}) => {
  return (
      data.map(film => <Item key={film.id} info={film} />)
  );
}


export default ItemList;