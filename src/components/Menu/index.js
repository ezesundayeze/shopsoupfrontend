import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class MenuBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-danger bg-danger fixed-top">
        <div className="container">
          <a className="navbar-brand" href="##">
            Shop Soup
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="##">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart {this.props.items.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToprops = state => ({
  item: state.item,
  items: state.items
});

export default connect(mapStateToprops)(MenuBar);
