import React, {useContext, useEffect} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { CartContext } from '../CartContext';


export function Product({title, imageUrl, id}) {
  const { addItemToCart } = useContext(CartContext);
  
  function onPressCart() {
    addItemToCart({id,title,imageUrl});
  }
  return (
    <TouchableOpacity style={styles.cont}>
      <Image
        style={styles.img}
        source={{uri: imageUrl}}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{title}</Text>
        <Button
            onPress={onPressCart}
            title="Add to cart"
            / >
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#b4b4b4',
    marginVertical: 20,
    shadowColor: 'black',
    borderRadius: 9,
    margin:8,

  },
  img: {
    height: 150,
    width: '40%',
    paddingLeft:30,
    marginLeft:110
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
