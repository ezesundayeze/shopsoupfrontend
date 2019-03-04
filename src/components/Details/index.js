import React, { Component } from "react";
import MenuBar from "./../../components/Menu";
import Sidebar from "./../../components/LeftSidebar";
import Footer from "./../../components/Footer";

class Detail extends Component {
  state = {};

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
                    <h3 className="card-title">Product Name</h3>
                    <h4>$24.99</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente dicta fugit fugiat hic aliquam itaque facere,
                      soluta. Totam id dolores, sint aperiam sequi pariatur
                      praesentium animi perspiciatis molestias iure, ducimus!
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default Detail;
