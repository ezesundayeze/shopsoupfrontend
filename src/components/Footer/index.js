import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="py-5 bg-danger">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Shop Soup 2019
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
