
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CartContext } from '../CartContext';

export function CartImg({navigation}) {
  const {getItemsCount} = useContext(CartContext); //Gettings Items in cart.
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >My Cart ({getItemsCount()})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
