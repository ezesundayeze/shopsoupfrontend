const fetchProducts = () => {
  return function(dispatch) {
    return fetch("https://shopsoup.herokuapp.com/api/v1/product/")
      .then(data => {
        return data.json();
      })
      .then(products => {
        // this.props.dispatch({ type: "get_products", payload: [products] });

        dispatch(setProducts(products));
      });
  };
};

export default fetchProducts;
