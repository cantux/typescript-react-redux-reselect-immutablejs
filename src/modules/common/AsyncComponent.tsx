import * as React from 'react';

import { LoadingComponent } from './LoadingComponent';

import { Observable } from 'rxjs';

interface AsyncComponentStates {
  component: React.ComponentClass<any> | React.StatelessComponent<any> | null;
}

export default function asyncComponent<P>(importComponent:
  Promise<any> ) {
  class AsyncComponent extends React.Component<P, AsyncComponentStates> {

    componentDidMount() {
      Observable.fromPromise(importComponent)
        .subscribe((component) => {
          this.setState({
            component: component.default
          });
        }
      );
    }

    render() {
      let C = null;
      if (this.state) {
        C = this.state.component;
      }

      return C ? <C {...this.props} /> : <LoadingComponent/>;
    }
  }

  return AsyncComponent;
}
