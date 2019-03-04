import React, { Component } from "react";
import Products from "../../components/Product";
class ProductList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Products className="productsList" />
      </React.Fragment>
    );
  }
}

export default ProductList;
