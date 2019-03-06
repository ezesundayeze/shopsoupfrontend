import React, { Component } from "react";
import { connect } from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoaded: false,
      addToCartBtnColor: "btn-primary",
      disabled: false
    };

    this.style = {
      "pointer-events": "none"
    };
  }

  onAddItem(val) {
    this.props.dispatch({ type: "add_item", payload: val });
    console.log(this.props.items.length);
    if (this.props.items.length === 0) {
      localStorage.setItem("cart", JSON.stringify([val]));
    } else {
      localStorage.setItem("cart", JSON.stringify([...this.props.items, val]));
    }

    //change color
    this.setState({ disabled: true });
    console.log();
  }

  btnState() {
    console.log(this.props.items.map(data => data.btnState));
    return this.props.items.map(data => data.btnState);
  }

  getProducts() {
    fetch("https://shopsoup.herokuapp.com/api/v1/product/")
      .then(data => {
        return data.json();
      })
      .then(products => {
        this.setState({ isLoaded: true });
        this.setState({ products });
        // this.props.dispatch({ type: "get_products", payload: [products] });
      });
  }

  componentDidMount() {
    //get products and add it to the store

    // this.props.fetchProducts();
    this.getProducts();
    fetch("https://shopsoup.herokuapp.com/api/v1/product/")
      .then(data => {
        return data.json();
      })
      .then(products => {
        this.props.dispatch({ type: "get_products", payload: products });
      });

    if (localStorage.getItem("cart")) {
      if (
        this.props.items.length === 0 &&
        localStorage.getItem("cart").length !== 0
      ) {
        this.props.dispatch({
          type: "update_cart",
          payload: [...JSON.parse(localStorage.getItem("cart"))]
        });
      }

      if (localStorage.getItem("cart") === "undefined") {
        localStorage.removeItem("cart");
      }
    }
  }

  render() {
    return (
      <div className="row">


    
        
            
 
        {this.state.isLoaded
          ? this.state.products.map(data => {
              return (
                <div key={data.id} className="col-lg-4 col-md-1 mb-4">
                  <div className="card h-100">
                    <a href="##">
                      <img
                        className="card-img-top"
                        src="https://loremflickr.com/320/240/food"
                        alt=""
                      />
                    </a>

                    <div className="card-body">
                      <h4 className="card-title">
                        <a href={`/details/${data.id}`}>{data.title}</a>
                      </h4>
                      <h5>${data.price}</h5>
                      <p className="card-text">{data.description}</p>
                    </div>

                    <div className="card-footer">
                      <small className="text-muted">
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                      <button
                        onClick={this.onAddItem.bind(this, {
                          id: this.props.items.length + 1,
                          title: data.title,
                          description: data.description,
                          price: data.price,
                          qantity: 1
                        })}
                        className={`btn ${
                          this.state.addToCartBtnColor
                        } add-to-cart`}
                        id="add-to-cart"
                        disabled={""}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : "Loading..."}
      </div>

         
       
    
    );
  }
}

const mapStateToProps = state => ({
  itemCount: state.itemCount,
  items: state.items,
  products: state.products
});

// const mapDispatchToProps = dispatch => {
//   return {
//     add: () => {
//       dispatch({ type: "Add_Item" });
//     }
//   };
// };

export default connect(mapStateToProps)(Products);
