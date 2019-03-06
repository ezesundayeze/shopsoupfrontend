import React, { Component } from "react";
import MenuBar from "./../../components/Menu";
import Sidebar from "./../../components/LeftSidebar";
import Product from "./../../components/Product";
// import Footer from "./../../components/Footer";
import "./index.css";

import { connect } from "react-redux";

import "./index.css";

class SoupLayout extends Component {
  constructor(props) {
    super();
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
                <Product />
              </div>
            </div>
          </div>
          
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps)(SoupLayout);
