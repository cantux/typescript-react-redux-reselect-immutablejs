import * as React from 'react';

import { Link } from 'react-router-dom';

interface HomeProps {}

export const Home: React.SFC<HomeProps> = (props: HomeProps) =>
  (
    <div>Hello overkill?
      <Link to="/">Home</Link>{' '}
      <Link to={{pathname: '/simpleCounter'}}>Simple Counter</Link>{' '}
      <Link to="/counterList">Counter List</Link>
    </div>
  );
