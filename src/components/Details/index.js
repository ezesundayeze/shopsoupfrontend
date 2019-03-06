import React, { Component } from "react";
import MenuBar from "./../../components/Menu";
import Sidebar from "./../../components/LeftSidebar";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch(
      "https://shopsoup.herokuapp.com/api/v1/product/" +
        this.props.match.params.id
    )
      .then(data => {
        return data.json();
      })
      .then(products => {
        this.setState({ isLoaded: true });
        this.setState({ products });
        // this.props.dispatch({ type: "get_products", payload: [products] });
      });
  }

  render() {
    return (
      <React.Fragment>
        <MenuBar />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              {/* Add the SLider component here */}
              <div className="row">
                <div className="card mt-4">
                  <img
                    className="card-img-top img-fluid"
                    src="http://placehold.it/900x400"
                    alt=""
                  />
                  <div className="card-body">
                    <h3 className="card-title">{this.state.products.title}</h3>
                    <h4>${this.state.products.price}</h4>
                    <p className="card-text">
                      {this.state.products.description}
                    </p>
                    <span className="text-warning">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </span>
                    4.0 stars
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
