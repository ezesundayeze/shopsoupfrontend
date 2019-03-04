import React, { Component } from "react";
import { connect } from "react-redux";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="sidebar-top-space left-sidebar" />
        <div className="list-group">
          <a href="##" className="list-group-item">
            Category1
          </a>
          <a href="##" className="list-group-item">
            Category
          </a>
          <a href="##" className="list-group-item">
            Category 3
          </a>
        </div>
      </React.Fragment>
    );
  }
}

const mapPropsToState = state => ({
  itemCount: state.itemCount,
  items: state.items
});

export default connect(mapPropsToState)(SideBar);
