import create from 'zustand';

// type CartItem = {
//   title: string;
//   price: number;
//   id: number;
//   qty: number;
//   totalPrice: number;
// };

// interface cartStoreType {
//   cart: CartItem[];
//   totalPrice: number;
//   itemCount: number;
//   addItemToCart: ({title, price, imageUrl, id}: ProductType) => void;
//   getTotalPrice: () => void;
// }
const cartStore = (set) => ({
  cart: [],
  itemCount: 0,
  addItemToCart: ({title, imageUrl, id}) => {
    set((state) => ({
      cart: state.cart.find((currItem) => currItem.id === id)
        ? state.cart.map((currItem) =>
            currItem.id === id
              ? {
                  ...currItem,
                  qty: currItem.qty + 1,
                }
              : currItem,
          )
        : [
            ...state.cart,
            {
              id,
              qty: 1,
              title,
              imageUrl,
            },
          ],
      itemCount:
        1 +
        state.cart.reduce((sum, item) => sum + item.qty, 0),
    }));
  },

});

const useCartStore = create(cartStore);

export default useCartStore;