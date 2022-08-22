
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useCartStore from '../zustandCart';


export function CartImg({navigation}) {
  // const {getItemsCount} = useContext(CartContext); //Gettings Items in cart.
  const itemCount = useCartStore(state => state.itemCount);

  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >My Cart ({itemCount})</Text>
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
