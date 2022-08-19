import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,ActivityIndicator } from 'react-native';

import { Product } from '../components/Product.js';
import axios from 'axios';
import { useInfiniteQuery } from "react-query";
 
function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
}

export function ProductsFlattening ({navigation}) {

  const {fetchNextPage} = useInfiniteQuery(
    'products',
    () =>
      getDataFromServer(
        `https://api.opensea.io/api/v1/collections?offset=${offset}&limit=20`,
      ),
    {
      onSuccess: () => {
        setOffset(offset + 10);
      },
      getNextPageParam: () => offset,
    },
  );

  function listEnd() {
    fetchNextPage();
  }

  function renderProduct({item: product}) {
    return (
      <Product {...product} />
    );
  }
  
  // const [products, setProduct] = useState([]);
  const [products, setProducts] = useState([] );
  const [loader, setLoader] = useState(true);
  const [offset, setOffset] = useState(0);

  async function getDataFromServer(url) {
    const response = await axios.get(url);
    let data = products;
    for (let i = 0; i <= 9; i++) {
      if (!data.some(el => el.id === response.data.collections[i + ''].name)) {
        data.push({
          title: response.data.collections[i + ''].name,
          imageUrl: response.data.collections[i + ''].image_url,
          price: response.data.collections[i + ''].stats.average_price,
          id: response.data.collections[i + ''].name,
        });
      }
    }

    setProducts(data);
    setLoader(false);
    }


  
 
  if (loader) {
    return <Loader />;
  } else {
    return (
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={renderProduct}
        numColumns={1}
        onEndReached={listEnd}
      />
    );
  }
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
