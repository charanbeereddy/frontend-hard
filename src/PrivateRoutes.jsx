import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./pages/products/Products";
class PrivateRoutes extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div id="content">
          <Switch>
            <Route exact path="/products" component={Products} />
            <Route component={() => <div>Not Found</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default PrivateRoutes;
