import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import LoginComponent from "./pages/login/Login";
import SignUpComponent from "./pages/signup/SignUp";
import PrivateRoutes from "./PrivateRoutes";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/sign-up" component={SignUpComponent} />
          <AuthGuard exact component={PrivateRoutes} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
