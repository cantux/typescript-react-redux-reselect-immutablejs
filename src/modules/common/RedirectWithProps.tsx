import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps
} from 'react-router-dom';

interface RedirectWithProps extends RouteProps {
  readonly redirectPath: string;
  readonly component: React.ComponentClass<any> | React.StatelessComponent<any>;
}

export default function redirectWithProps({component, redirectPath, ...rest}: RedirectWithProps) {
  const Component = component;

  const render = (renderProps: RouteComponentProps<any>) => {
    let element = <Component {...renderProps} />;

    element = (
      <Redirect
        to={{
          pathname: redirectPath,
          state: { from: renderProps.location }
        }}
      />
    );

    return element;
  };

  return <Route {...rest} render={render} />;
}
