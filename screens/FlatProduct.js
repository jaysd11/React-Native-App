import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Product } from '../components/Product.js';
import { getProducts } from '../service/ProductsInfo.js';

export function ProductsFlattening ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} />
    );
  }
  
  const [products, setProduct] = useState([]);
  
  useEffect(() => {
    setProduct(getProducts());
  });
  
  return (
    <FlatList
      style={styles.productsListing}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsListing: {
    backgroundColor: 'white',
  },
  productsListContainer: {
    marginHorizontal: 6,
    marginVertical: 4,
    backgroundColor: '#3c3c3c',
    justifyContent:"center",
  },
});
