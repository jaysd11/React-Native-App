import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

import useCartStore from '../zustandCart';


export function Cart ({navigation}) {

  // const {items} = useContext(CartContext);
  const items = useCartStore(state => state.cart);


  function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
              <Image style={styles.thumb}
        source={{uri: item.imageUrl}}
      />
          <Text style={styles.lineLeft}>{item.title} x {item.qty}</Text>
       </View>
    );
  }
  
  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 15, 
    lineHeight: 40, 
    color:'#333333',
    paddingLeft:30
  },  thumb: {
    height: 70,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '30%',
    marginBottom:30
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
