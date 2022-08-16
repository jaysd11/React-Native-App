import React from 'react';
import { useQuery } from "react-query";
 import { QueryClient, QueryClientProvider } from 'react-query'
 
 const queryClient = new QueryClient()

import { ProductsFlattening } from './screens/FlatProduct.js';
import { Cart } from './screens/MyCart.js';
import { CartImg } from './components/CartImg.js';
import { AppLogo } from './components/AppLogo.js';
import { CartProvider } from './CartContext.js';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const fetchUsers = async () => {
  const res = await fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=10");
  const json = await res.json()
  return json;
};

const Dataset = () => {
  const { data, status } = useQuery("usr", fetchUsers);
  //console.log("Jayesh")
  console.log(data)

  return (
  <></>      
  );
}


function App() {

  return (
    
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <Dataset/>
     </QueryClientProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsFlattening} 
          options={({ navigation }) => ({
            title: 'Shopify',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartImg navigation={navigation}/>,
            headerLeft: () => <AppLogo navigation={navigation}/>
          })}/>

          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My Cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartImg navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 22,
    backgroundColor:'red',
  }
});

export default App;
