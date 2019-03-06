import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import Home from "./containers/Layout";
import Cart from "./components/Cart";
class App extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={`/details/:id`} component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
    );
  }
}

export default App;
