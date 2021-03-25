import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthRouter({ component: Component, ...rest }) {
  const authToken = localStorage.getItem('token');
  console.log(authToken);
  return (
    <Route
      {...rest}
      render={(props) => {
        return authToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
}
