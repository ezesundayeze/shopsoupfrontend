import React, { Component } from "react";
import { connect } from "react-redux";
class SideBar extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    fetch("https://shopsoup.herokuapp.com/api/v1/category/")
      .then(data => {
        return data.json();
      })
      .then(categories => {
        this.setState({ categories });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="sidebar-top-space left-sidebar" />
        <div className="list-group">
          {this.state.categories.map(data => {
            return (
              <a key={data.id} href="##" className="list-group-item">
                {data.name}
              </a>
            );
          })}
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
