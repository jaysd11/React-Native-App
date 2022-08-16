
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export function AppLogo({navigation}) {
  return (
    <View style={styles.container}>
        <Image style = {styles.logo} source = {require('../assets/logo.png')}/>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Products');
        }}
      >            </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'red',
    height: 32,
    padding: 2,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    paddingBottom:30,
    marginTop:20,
    height: 26,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
