import * as React from 'react';

import { Link } from 'react-router-dom';

interface HomeProps {}

export const Home: React.SFC<HomeProps> = (props: HomeProps) =>
  (
    <div>Hello overkill?
      <p/>
      <Link to="/">Home</Link>{' '}
      <p/>
      <Link to={{pathname: '/simpleCounter'}}>Simple Counter</Link>{' '}
      <p/>
      <Link to="/counterList">Counter List</Link>
      <br/><br/><br/>
      <span>
      Create a counter by using the counterList link before using the components below.
      <p/>
        I chose not to initialize initialState with a Counter object.
      </span>
      <br/><br/><br/>
      <p/>
      <Link to="/reduxCounter/0">Redux Counter</Link>

      <br/><br/><br/>
      <span>
      See that state is shared between different counter components by incrementing one and seeing the change in other.
      </span>
      <br/><br/><br/>
      <p/>
      <Link to="/asyncReduxCounter/0">Async Redux Counter</Link>
    </div>
  );
