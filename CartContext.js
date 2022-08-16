import React, {createContext, useState} from 'react';


export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  function addItemToCart({id,title,imageUrl}) {
    // const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              title,
              imageUrl
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
            }
            return item;
          });
      }
    });

  }

  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }
  
  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart}}>
      {props.children}
    </CartContext.Provider>
  );
}

