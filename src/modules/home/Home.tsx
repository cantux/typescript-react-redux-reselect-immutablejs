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
      <p/>
      <Link to="/reduxCounter/0">Redux Counter</Link>
      <p/>
      <Link to="/asyncReduxCounter/0">Async Redux Counter</Link>
    </div>
  );
