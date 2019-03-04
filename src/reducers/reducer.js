const initialState = {
  products: [],
  items: [],
  itemCount: 0,
  isLoaded: false
};

export const reducer = (state = initialState, action) => {
  // const newState = {
  //     ...state
  // }

  // return newState

  switch (action.type) {
    case "add_item":
      return {
        itemCount: state.itemCount + 1,
        items: [...state.items, action.payload]
      };

    case "update_cart":
      return {
        items: action.payload
      };

    // case "get_products":
    //   return {
    //     products: [...state.products, action.payload]
    //   };

    default:
      return state;
  }
};
