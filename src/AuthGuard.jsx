import React from 'react';
import { Redirect, Route } from 'react-router-dom';
export default class AuthGuard extends React.Component {

  handleRender = () => {
    const { component: ComposedComponent } = this.props;

    if (localStorage.getItem('currentUser')) {
      return <ComposedComponent {...this.props} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: this.props.location,
            }
          }}
        />
      );
    }
  };

  render() {
    const { component, ...rest } = this.props;

    return <Route {...rest} render={this.handleRender} />;
  }
}
