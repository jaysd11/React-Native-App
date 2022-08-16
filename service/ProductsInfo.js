import create from 'zustand';

import { useQuery } from "react-query";

function extractData(data){
    console.log("Jayesh")
    console.log(data);
    
}

const PRODUCTS = [
    {
        id: 100,
        name: 'Ear Buds',
        price: 350,
        image: require('../assets/products/buds.jpg'),
        description: 'A pair of tiny speakers which are very comfortable. It is also sweat-resistant.'
    },
    {
        id: 101,
        name: 'Allen Solly Watch',
        price: 600,
        image: require('../assets/products/watch.jpg'),
        description: 'A beatiful and classy watch. It has warranty for 2 years'
    },
    {
        id: 102,
        name: 'Lenovo ThinkPad',
        price: 2,
        image: require('../assets/products/Thinkpad.jpg'),
        description: 'Lenovo ThinkPad is a Windows 10 laptop with a 14.00-inch display that has a resolution of 1920x1080 pixels.'
    }
];

// const fetchUsers = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     return res.json();
//   };
  
export function getProducts() {
    //let data = getDataFromServer('https://api.opensea.io/api/v1/collections?offset=0&limit=10');
    //data = formatData(data);

    //const { data, status } = useQuery("users", fetchUsers);
    //data = extractData(data);
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

