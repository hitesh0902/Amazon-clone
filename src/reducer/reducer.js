export const initialState = {
  basket: [
    // {
    //   id: 1,
    //   title: "Echo Dot (3rd Gen) – New and improved smart speaker with Alexa",
    //   price: 50.49,
    //   rating: 5,
    //   image: "https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg",
    // },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
        // console.log(newBasket);
      } else {
        console.log(`Cannot remove product (id: ${action.id})`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
